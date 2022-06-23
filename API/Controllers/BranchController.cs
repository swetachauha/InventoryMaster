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
    public class BranchController:BaseApiController
    {
          private readonly DataContext _context;
        public BranchController(DataContext context )
        {
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<BranchEntity>>> GetAllBranchs()
        {

            return await  _context.Branch.ToListAsync();
        }

         private async Task<bool> BranchExists(string BranchId)
        {
            return await _context.Branch.AnyAsync(x => x.BranchId==BranchId);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<BranchEntity>>> AddBranch(BranchDTO BranchDTO)
        {
             if (await BranchExists(BranchDTO.BranchId))
            {
                return BadRequest("Branch already Exists");

            }
            else{
                   var Branch = new BranchEntity
                {
                    BranchId=BranchDTO.BranchId,
                    FirmName=BranchDTO.FirmName,
                    BranchName = BranchDTO.BranchName,
                    Address=BranchDTO.Address,
                    City=BranchDTO.City
                    
                };
                _context.Branch.Add(Branch);
                await _context.SaveChangesAsync();
              
                return await  _context.Branch.ToListAsync();
 
            


            }
        }
    [HttpGet("displaybyBranchId/{BranchId}")]

        public async Task<BranchEntity> getBranchById(string BranchId)
        {
            return await _context.Branch
                .FirstOrDefaultAsync(e => e.BranchId == BranchId);
        }
    
     [HttpPut("{BranchId}")]
        public async Task<ActionResult<BranchEntity>> Updatebranch(string BranchId, BranchEntity branchEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { itemId}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (BranchId != branchEntity.BranchId)
                {
                     return BadRequest("Branch not found");
                }

                var branchToUpdate = await getBranchById(BranchId);

               if (branchToUpdate == null)
                {
                    return NotFound($"Item of name {BranchId} not found");
                }
                var result = await _context.Branch
                            .FirstOrDefaultAsync(e => e.BranchId == branchEntity.BranchId);
                if (result != null)
                {
                     result.BranchId=branchEntity.BranchId;
                    result.FirmName=branchEntity.FirmName;
                    result.BranchName = branchEntity.BranchName;
                   result. Address=branchEntity.Address;
                    result.City=branchEntity.City;

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