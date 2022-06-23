using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class godownController:BaseApiController
    {
        private readonly DataContext _context;
        public godownController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<godownEntity>>> GetAllGodown()
        {

            return await  _context.Godown.ToListAsync();
        }


        //  private async Task<bool> godownExists(string groupName)
        // {
        //     return await _context.Groups.AnyAsync(x => x.groupName == groupName);
        // }

         [HttpPost]
        public async Task<ActionResult<IEnumerable<godownEntity>>> AddGodown(godownDTO godownDTO)
        {
            //  if (await UserExists(groupDTO.groupName))
            // {
            //     return BadRequest("groupName already taken");

            // }
           
                   var godown = new godownEntity
                {
                    // godownId=godownDTO.godownId,
                    godownName = godownDTO.godownName,
                    managerName=godownDTO.managerName,
                    godownAddress=godownDTO.godownAddress
                    
                };
                _context.Godown.Add(godown);
                await _context.SaveChangesAsync();
                return await  _context.Godown.ToListAsync();
 
            


            
        }
    }
}