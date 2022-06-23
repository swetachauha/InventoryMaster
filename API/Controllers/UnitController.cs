using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UnitController :BaseApiController
    {
        private readonly DataContext _context;
        public UnitController(DataContext context )
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnitEntity>>> GetAllGroups()
        {

            return await  _context.Unit.ToListAsync();
        }

        // get item by name
    //      [HttpGet("{groupName}")]

    //   public async Task<groupEntity> GetgroupById(string groupName)
    //     {
    //         return await _context.Groups
    //             .FirstOrDefaultAsync(e => e.groupName == groupName);
    //     }


// alrady exists
  private async Task<bool> UnitExists(string unit)
        {
            return await _context.Unit.AnyAsync(x => x.Unit == unit);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<UnitEntity>>> AddUnit(UnitDTO unitDTO)
        {
             if (await  UnitExists(unitDTO.Unit))
            {
                return BadRequest("Unit already taken");

            }
            else{
                   var unit = new UnitEntity
                {
                    Unit=unitDTO.Unit,
                    Acronymn = unitDTO.Acronymn,
                    
                };
                _context.Unit.Add(unit);
                await _context.SaveChangesAsync();
               
                return await  _context.Unit.ToListAsync();
 
            


            }
        }

          [HttpGet("displayUnit/{unit}")]

        public async Task<UnitEntity> GetUnit(string unit)
        {
            return await _context.Unit
                .FirstOrDefaultAsync(e => e.Unit == unit);
        }

           [HttpPut("{unit}")]
        public async Task<ActionResult<UnitEntity>> UpdateUnit(string unit, UnitEntity unitEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { unit}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (unit != unitEntity.Unit)
                {

                    return BadRequest("Unit not found");
                }

                var unitToUpdate = await GetUnit(unit);

               if (unitToUpdate == null)
                {
                    return NotFound($"Item of name {unit} not found");
                }
                var result = await _context.Unit
                            .FirstOrDefaultAsync(e => e.Unit == unitEntity.Unit);
                if (result != null)
                {
                    result.Unit = unitEntity.Unit;
                    result.Acronymn = unitEntity.Acronymn;

                    await _context.SaveChangesAsync();
                    return result;
                }
                return null;

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
            }
        }



    }
    
}