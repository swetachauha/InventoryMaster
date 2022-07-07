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
    public class firmController:BaseApiController
    {
         private readonly DataContext _context;
        public firmController(DataContext context)
        {
            _context = context;
        }


      private async Task<bool> firmExists(string GST_No)
        {
            return await _context.Firm.AnyAsync(x => x.GST_No == GST_No);
        }
         private async Task<bool> AnotherfirmName(string firmName)
        {
            return await _context.Firm.AnyAsync(x => x.FirmName != firmName);
        }
         [HttpPost]
        public async Task<ActionResult<FirmDTO>> firm(FirmDTO firmDTO)
        {
           

           if ( await AnotherfirmName(firmDTO.FirmName))
            {
                return BadRequest(" Only one firm u have paid for ..");

            }
            else if(await firmExists(firmDTO.GST_No))
            {
                return BadRequest("Same firm with same GST_No  already exists");

            }
            else{
  var firm = new firmEntity
                {
                    // firmId=firmDTO.firmId,
                    FirmLogo = firmDTO.FirmLogo,
                    FirmName=firmDTO.FirmName, 
                    FirmAddress = firmDTO.FirmAddress,
                    FirmLocation=firmDTO.FirmLocation,
                    GST_No=firmDTO.GST_No,
                    PAN_No=firmDTO.PAN_No,
                    Reg_no=firmDTO.Reg_no,
                    FSSAI_No=firmDTO.FSSAI_No,
                    Contact_Person=firmDTO.Contact_Person,
                    Contact_Mobile=firmDTO.Contact_Mobile,
                    Email=firmDTO.Email,
                    Website=firmDTO.Website,
                    Bank_Name=firmDTO.Bank_Name,
                    Bank_Address=firmDTO.Bank_Address,
                    Account_No=firmDTO.Account_No,
                    IFSC_Code=firmDTO.IFSC_Code
                    

                };

                // Console.WriteLine($"NEWfirm , {firm.Group.groupName}");

                _context.Firm.Add(firm);
                await _context.SaveChangesAsync();

                var display = new FirmDTO
                {
                    FirmLogo = firm.FirmLogo,
                    FirmName = firm.FirmName,
                    FirmAddress = firm.FirmAddress,
                    FirmLocation=firm.FirmLocation,
                    GST_No=firm.GST_No,
                    PAN_No=firm.PAN_No,
                    Reg_no=firm.Reg_no,
                    FSSAI_No=firm.FSSAI_No,
                    Contact_Person=firm.Contact_Person,
                    Contact_Mobile=firm.Contact_Mobile,
                    Email=firm.Email,
                    Website=firm.Website,
                    Bank_Name=firm.Bank_Name,
                    Bank_Address=firm.Bank_Address,
                    Account_No=firm.Account_No,
                    IFSC_Code=firm.IFSC_Code

                };
                 return display;
            }

              
               
            // }

            // else
            // {
            //     return NotFound("No group found");
            // }

        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<firmEntity>>> GetAllGroups()
        {

            return await  _context.Firm.ToListAsync();
        }
          [HttpGet("{firmGSTNo}")]

        public async Task<firmEntity> GetItemByName(string firmGSTNo)
        {
            return await _context.Firm
                .FirstOrDefaultAsync(e => e.GST_No == firmGSTNo);
        }
 [HttpGet("displayFirmByPAN_No/{PAN_No}")]

        public async Task<firmEntity> getFirmByPAN_No(string PAN_No)
        {
            return await _context.Firm
                .FirstOrDefaultAsync(e => e.PAN_No == PAN_No);
        }
     [HttpPut("{PAN_No}")]
        public async Task<ActionResult<firmEntity>> UpdateBank(string PAN_No, firmEntity firmEntity)
        {
           
                Console.WriteLine($"FROM BODY { PAN_No}");
                 Console.WriteLine($"DB ITEMNAME { firmEntity.PAN_No}");

                if (PAN_No != firmEntity.PAN_No)
                {
                    Console.WriteLine($"PAN_No {PAN_No}");
                     Console.WriteLine($"firmEntity.PAN_No {firmEntity.PAN_No}");

                    return BadRequest("PAN_No not found");
                }

                var bankToUpdate = await getFirmByPAN_No(PAN_No);
                    Console.WriteLine($"bankToUpdate {bankToUpdate}");

               if (bankToUpdate == null)
                {
                    return NotFound($"Item of name {PAN_No} not found");
                }
                var result = await _context.Firm
                            .FirstOrDefaultAsync(e => e.PAN_No == firmEntity.PAN_No);
                                                Console.WriteLine($"result {result.FirmName}");

                if (result != null)
                {
                    result.FirmLogo = firmEntity.FirmLogo;
                    result.FirmName=firmEntity.FirmName;

                     result.FirmAddress = firmEntity.FirmAddress;
                     result.FirmLocation=firmEntity.FirmLocation;
                     result.GST_No=firmEntity.GST_No;
                     result.PAN_No=firmEntity.PAN_No;
                     result.Reg_no=firmEntity.Reg_no;
                     result.FSSAI_No=firmEntity.FSSAI_No;
                     result.Contact_Person=firmEntity.Contact_Person;
                     result.Contact_Mobile=firmEntity.Contact_Mobile;
                     result.Email=firmEntity.Email;
                     result.Website=firmEntity.Website;
                     result.Bank_Name=firmEntity.Bank_Name;
                     result.Bank_Address=firmEntity.Bank_Address;
                     result.Account_No=firmEntity.Account_No;
                     result.IFSC_Code=firmEntity.IFSC_Code;

                     Console.WriteLine($"result4 {result.IFSC_Code}");

                    //  _context.Firm.Update(result);
                    try
                    {
                     await _context.SaveChangesAsync();
                     Console.WriteLine($"result3 {result.FirmName}");

                    return result;
                    }
                     catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
            }
                    
                }
                return null;

            
           
        }





   
      
    }
}