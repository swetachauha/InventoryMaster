using API.Data;
using API.DTOs;
using API.Entity;
// using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class groupController :BaseApiController
    {
         private readonly DataContext _context;
        //  private readonly IMapper _mapper;

        public groupController(DataContext context )
        {
            _context = context;
        }


        // display all items
         [HttpGet]
        public async Task<ActionResult<IEnumerable<groupEntity>>> GetAllGroups()
        {

            return await  _context.Groups.ToListAsync();
        }

        // get item by name
         [HttpGet("{groupName}")]

      public async Task<groupEntity> GetgroupById(string groupName)
        {
            return await _context.Groups
                .FirstOrDefaultAsync(e => e.groupName == groupName);
        }


// alrady exists
  private async Task<bool> UserExists(string groupCategory)
        {
            return await _context.Groups.AnyAsync(x => x.groupCategory == groupCategory);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<groupEntity>>> AddGroup(groupDTO groupDTO)
        {
             if (await UserExists(groupDTO.groupCategory))
            {
                return BadRequest("groupCategory already taken");

            }
            else{
                   var group = new groupEntity
                {
                    groupId=groupDTO.groupId,
                    groupName = groupDTO.groupName,
                    groupCategory=groupDTO.groupCategory
                    
                };
                _context.Groups.Add(group);
                await _context.SaveChangesAsync();
                            return await  _context.Groups.ToListAsync();
 
            


            }
        }
  [HttpDelete("{groupName}")]
        public async Task<ActionResult<IEnumerable<groupEntity>>> DeleteGroup(string groupName)
        {
            // var group = await _context.Groups.FindAsync(e=>e.groupName==groupName);
            var group= await _context.Groups
                .FirstOrDefaultAsync(e => e.groupName == groupName);
            if (group == null)
            {
                return NotFound();
            }

            _context.Groups.Remove(group);
            await _context.SaveChangesAsync();

            return await  _context.Groups.ToListAsync();
        }

    }
}