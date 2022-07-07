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
    public class TransportController: BaseApiController
    {
          private readonly DataContext _context;
        public TransportController(DataContext context )
        {
            _context = context;
        }

         [HttpGet]
        public async Task<ActionResult<IEnumerable<TransportEntity>>> GetAllBranchs()
        {

            return await  _context.Transport.ToListAsync();
        }

         private async Task<bool> Transporter(string GST_No)
        {
            return await _context.Transport.AnyAsync(x => x.GST_No==GST_No);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<TransportEntity>>> AddTransport(TransportDTO TransportDTO)
        {
             if (await Transporter(TransportDTO.GST_No))
            {
                return BadRequest("Transporter already Exists");

            }
            else{
                   var Transport = new TransportEntity
                {
                   
                    Transporter_Name = TransportDTO.Transporter_Name,
                    GST_No=TransportDTO.GST_No,
                    Address=TransportDTO.Address,
                    City=TransportDTO.City,
                    State=TransportDTO.State,
                    Phone_No=TransportDTO.Phone_No,
                    Email=TransportDTO.Email,
                    Contact_Person=TransportDTO.Contact_Person


                    
                };
                _context.Transport.Add(Transport);
                await _context.SaveChangesAsync();
              
                return await  _context.Transport.ToListAsync();
 
            


            }
        }
    
    
    [HttpGet("display/{GST_No}")]

        public async Task<TransportEntity> getTransportByIFSC(string GST_No)
        {
            return await _context.Transport
                .FirstOrDefaultAsync(e => e.GST_No == GST_No);
        }

    
     [HttpPut("{GST_No}")]
        public async Task<ActionResult<TransportEntity>> UpdateTransport(string GST_No, TransportEntity TransportEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { itemId}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (GST_No != TransportEntity.GST_No)
                {
                    Console.WriteLine($"GST_No {GST_No}");
                     Console.WriteLine($"TransportEntity.GST_No {TransportEntity.GST_No}");

                    return BadRequest("GST_No not found");
                }

                var TransportToUpdate = await getTransportByIFSC(GST_No);

               if (TransportToUpdate == null)
                {
                    return NotFound($"Item of name {GST_No} not found");
                }
                var result = await _context.Transport
                            .FirstOrDefaultAsync(e => e.GST_No == TransportEntity.GST_No);
                                                Console.WriteLine($"GST_No {result.Address}");

                if (result != null)
                {
                    result.Transporter_Name=TransportEntity.Transporter_Name;
                    result.GST_No = TransportEntity.GST_No;
                    result.Address = TransportEntity.Address;
                    result.City=TransportEntity.City;
                    result.State=TransportEntity.State;
                    result.Phone_No=TransportEntity.Phone_No;
                    result.Email=TransportEntity.Email;
                    result.Contact_Person=TransportEntity.Contact_Person;


                    await _context.SaveChangesAsync();
                                        Console.WriteLine($"GST_No2 {result.Address}");

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