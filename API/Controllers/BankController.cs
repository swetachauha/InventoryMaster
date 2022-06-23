using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class BankController:BaseApiController
    {
           private readonly DataContext _context;
        public BankController(DataContext context )
        {
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<BankEntity>>> GetAllBranchs()
        {

            return await  _context.Bank.ToListAsync();
        }

         private async Task<bool> BankExists(string IFSC_Code)
        {
            return await _context.Bank.AnyAsync(x => x.IFSC_Code==IFSC_Code);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<BankEntity>>> AddBranch(BankDTO BankDTO)
        {
             if (await BankExists(BankDTO.IFSC_Code))
            {
                return BadRequest("Bank already Exists");

            }
            else{
                   var Bank = new BankEntity
                {
                   
                    BankName = BankDTO.BankName,
                    IFSC_Code=BankDTO.IFSC_Code,
                    Address=BankDTO.Address,
                    City=BankDTO.City
                    
                };
                _context.Bank.Add(Bank);
                await _context.SaveChangesAsync();
              
                return await  _context.Bank.ToListAsync();
 
            


            }
        }
    
    
    [HttpGet("displayBankByIFSC/{IFSC_Code}")]

        public async Task<BankEntity> getBankByIFSC(string IFSC_Code)
        {
            return await _context.Bank
                .FirstOrDefaultAsync(e => e.IFSC_Code == IFSC_Code);
        }

    
     [HttpPut("{IFSC_Code}")]
        public async Task<ActionResult<BankEntity>> UpdateBank(string IFSC_Code, BankEntity bankEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { itemId}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (IFSC_Code != bankEntity.IFSC_Code)
                {
                    Console.WriteLine($"IFSC_Code {IFSC_Code}");
                     Console.WriteLine($"bankEntity.IFSC_Code {bankEntity.IFSC_Code}");

                    return BadRequest("IFSC_Code not found");
                }

                var bankToUpdate = await getBankByIFSC(IFSC_Code);

               if (bankToUpdate == null)
                {
                    return NotFound($"Item of name {IFSC_Code} not found");
                }
                var result = await _context.Bank
                            .FirstOrDefaultAsync(e => e.IFSC_Code == bankEntity.IFSC_Code);
                if (result != null)
                {
                    result.BankName=bankEntity.BankName;
                    result.IFSC_Code = bankEntity.IFSC_Code;
                    result.Address = bankEntity.Address;
                    result.City=bankEntity.City;

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