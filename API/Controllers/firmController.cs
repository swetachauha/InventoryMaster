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

         [HttpPost]
        public async Task<ActionResult<FirmDTO>> firm(FirmDTO firmDTO)
        {
            // var group = await _context.Firm
            //     .FirstOrDefaultAsync(e => e.groupName == firmDTO.groupName);
            // Console.WriteLine($"FROM group  {group}");

            // if firm alreadyexists throw err
            // if ( await firmExists(firmDTO.firmName))
            // {
            //     return BadRequest("firm Name already taken");

            // }


            //  if (group != null)
            // {
            //     var groupId = group.groupId;
            //     Console.WriteLine($"groupId , {groupId}");
            //     //  var parent=_context.Groups
            //     //     .Include(p => p.firms)
            //     //     .FirstOrDefaultAsync(e =>e.groupId==groupId
            //     //         // Console.WriteLine($"groupId , {e.groupId}");

            //     //     );

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
            // }

            // else
            // {
            //     return NotFound("No group found");
            // }

        }
    }
}