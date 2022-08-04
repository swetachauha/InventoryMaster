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
[HttpGet("getPartyByGST/{GST_No}")]
  public async Task<PartyEntity> getPartyByGST(string GST_No)
        {
            return await _context.Party.Where(e => e.GST_No== GST_No)
                .FirstOrDefaultAsync();
                
        }
    
     [HttpPut("{partyId}")]
        public async Task<ActionResult<PartyEntity>> UpdateParty(int partyId, PartyEntity PartyEntity)
        {
            try
            {
                var result = await _context.Party
                            .FirstOrDefaultAsync(e => e.ID == partyId);
                if (result != null)
                {
                    result.Party_Name=PartyEntity.Party_Name;
                    result.Party_Type=PartyEntity.Party_Type;
                    result.GST_No=PartyEntity.GST_No;
                    result.PAN_No=PartyEntity.PAN_No;
                    result.Contact_Person=PartyEntity.Contact_Person;
                    result.Phone_No=PartyEntity.Phone_No;
                    result.Email=PartyEntity.Email;
                    result.Party_Address = PartyEntity.Party_Address;
                    result.City=PartyEntity.City;
                    result.State=PartyEntity.State;
                    result.PIN_No=PartyEntity.PIN_No;


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