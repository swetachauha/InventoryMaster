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
    public class TaxController:BaseApiController
    {
          private readonly DataContext _context;
        public TaxController(DataContext context )
        {
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<TaxEntity>>> GetAllTaxs()
        {

            return await  _context.Tax.ToListAsync();
        }

         private async Task<bool> TaxExists(string TaxType)
        {
            return await _context.Tax.AnyAsync(x => x.TaxType==TaxType);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<TaxEntity>>> AddTax(TaxDTO TaxDTO)
        {
             if (await TaxExists(TaxDTO.taxType))
            {
                return BadRequest("Tax already Exists");

            }
            else{
                   var Tax = new TaxEntity
                {
                    ID=TaxDTO.taxID,
                    TaxType = TaxDTO.taxType,
                    TaxPerc=TaxDTO.taxPerc
                    
                };
                _context.Tax.Add(Tax);
                await _context.SaveChangesAsync();
              
                return await  _context.Tax.ToListAsync();
 
            


            }
        }

          [HttpGet("displayTax/{taxType}")]

        public async Task<TaxEntity> GetTaxBytype(string taxType)
        {
            return await _context.Tax
                .FirstOrDefaultAsync(e => e.TaxType == taxType);
        }
          [HttpPut("{taxType}")]
        public async Task<ActionResult<TaxEntity>> UpdateTax(string taxType, TaxEntity taxEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { taxType}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (taxType != taxEntity.TaxType)
                {
                    Console.WriteLine($"taxType {taxType}");
                     Console.WriteLine($"taxEntity.taxType {taxEntity.TaxType}");

                    return BadRequest("taxType not found");
                }

                var taxToUpdate = await GetTaxBytype(taxType);

               if (taxToUpdate == null)
                {
                    return NotFound($"Item of name {taxType} not found");
                }
                var result = await _context.Tax
                            .FirstOrDefaultAsync(e => e.TaxType == taxEntity.TaxType);
                if (result != null)
                {
                    result.TaxType = taxEntity.TaxType;
                    result.TaxPerc = taxEntity.TaxPerc;

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