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
    public class PartyController:BaseApiController
    {
          private readonly DataContext _context;
        public PartyController(DataContext context )
        {
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<PartyEntity>>> GetAllBranchs()
        {

            return await  _context.Party.ToListAsync();
        }

         private async Task<bool> PartyNameExists(string Party_Name)
        {
            return await _context.Party.AnyAsync(x => x.Party_Name==Party_Name );
        }
         private async Task<bool> PartyContactExists(string Phone_No)
        {
            return await _context.Party.AnyAsync(x => x.Phone_No==Phone_No );
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<PartyEntity>>> AddBranch(PartyDTO PartyDTO)
        {
             if ((await PartyNameExists(PartyDTO.Party_Name )) && (await PartyContactExists(PartyDTO.Phone_No )))
            {
                return BadRequest("Party already Exists");

            }
            else{
                   var Party = new PartyEntity
                {
                   
                    Party_Name = PartyDTO.Party_Name,
                    Party_Address=PartyDTO.Party_Address,
                    City=PartyDTO.City,
                    State=PartyDTO.State,
                    GST_No=PartyDTO.GST_No,
                    Phone_No=PartyDTO.Phone_No,
                    Contact_Person=PartyDTO.Contact_Person,
                    PIN_No=PartyDTO.PIN_No,
                    Email=PartyDTO.Email,
                    Party_Type=PartyDTO.Party_Type,
                    PAN_No=PartyDTO.PAN_No
                    
                };
                _context.Party.Add(Party);
                await _context.SaveChangesAsync();
              
                return await  _context.Party.ToListAsync();
 
            


            }
        }
    
    
    [HttpGet("displayParty/{party_Name}/{phone_no}")]

        public async Task<PartyEntity> getPartyByIFSC(string party_Name,string phone_no)
        {
            return await _context.Party.Where(e => e.Party_Name == party_Name
             && e.Phone_No == phone_no)
                .FirstOrDefaultAsync();
                
        }

    
    //  [HttpPut("{IFSC_Code}")]
    //     public async Task<ActionResult<PartyEntity>> UpdateParty(string IFSC_Code, PartyEntity PartyEntity)
    //     {
    //         try
    //         {
    //             // Console.WriteLine($"FROM BODY { itemId}");
    //             //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

    //             if (IFSC_Code != PartyEntity.IFSC_Code)
    //             {
    //                 Console.WriteLine($"IFSC_Code {IFSC_Code}");
    //                  Console.WriteLine($"PartyEntity.IFSC_Code {PartyEntity.IFSC_Code}");

    //                 return BadRequest("IFSC_Code not found");
    //             }

    //             var PartyToUpdate = await getPartyByIFSC(IFSC_Code);

    //            if (PartyToUpdate == null)
    //             {
    //                 return NotFound($"Item of name {IFSC_Code} not found");
    //             }
    //             var result = await _context.Party
    //                         .FirstOrDefaultAsync(e => e.IFSC_Code == PartyEntity.IFSC_Code);
    //             if (result != null)
    //             {
    //                 result.PartyName=PartyEntity.PartyName;
    //                 result.IFSC_Code = PartyEntity.IFSC_Code;
    //                 result.Address = PartyEntity.Address;
    //                 result.City=PartyEntity.City;

    //                 await _context.SaveChangesAsync();
    //                 return result;
    //             }
    //             return null;

    //         }
    //         catch (Exception)
    //         {
    //             return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
    //         }
    //     }

    }
}