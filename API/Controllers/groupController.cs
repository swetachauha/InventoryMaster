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

  [HttpGet("category/{groupCategory}")]

      public async Task<groupEntity> GetgroupBy(string groupCategory)
        {
            return await _context.Groups
                .FirstOrDefaultAsync(e => e.groupCategory == groupCategory);
        }
// unque group
[HttpGet("unique")]

      public async Task<IOrderedQueryable<string>> GetUniqeGroups()
        {

            // return await  _context.Groups.Distinct().ToListAsync();
            var unique = 
               (from dbo in _context.Groups
                //  where dbo.Property == true 
                 select dbo.groupName).Distinct().OrderBy(name=>name);
                 return unique;
        }

// alrady exists
        private async Task<bool> UserExists(string groupCategory)
        {
            return await _context.Groups.AnyAsync(x => x.groupCategory == groupCategory);
        }
        //  active
         private async Task<bool> groupActive(string groupCategory)
        {
            return await _context.Groups.AnyAsync(x => x.active==true && x.groupCategory == groupCategory);
        }
        // not active
          private async Task<bool> groupNotActive(string groupCategory)
        {
            return await _context.Groups.AnyAsync(x => x.active==false && x.groupCategory == groupCategory);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<groupEntity>>> AddGroup(groupDTO groupDTO)
        {
             if (await UserExists(groupDTO.groupCategory) && await groupActive(groupDTO.groupCategory))
            {
                return BadRequest("groupCategory already taken");

            }
           
            else{
                   var group = new groupEntity
                {
                    groupId=groupDTO.groupId,
                    groupName = groupDTO.groupName,
                    groupCategory=groupDTO.groupCategory,
                    active=true,
                    UpdatedAt_=new DateTime()
                    
                };
                _context.Groups.Add(group);
                await _context.SaveChangesAsync();
                return await  _context.Groups.ToListAsync();
 
            


            }
        }
//   [HttpPut("{groupName}")]
//         public async Task<ActionResult<groupEntity>> EditGroup(string groupCategory,groupEntity groupEntity)
//         {
//             // var group = await _context.Groups.FindAsync(e=>e.groupName==groupName);
//             var group= await _context.Groups
//                 .FirstOrDefaultAsync(e => e.groupCategory == groupCategory);
//             if (group == null)
//             {
//                 return NotFound();
//             }
//             else{
//               group.groupName=groupEntity.groupName;
//               group.groupCategory=groupCategory;
//               group.active=false;
//               group.UpdatedAt_=System.DateTime.Now;

//                 await _context.SaveChangesAsync();

//                     return  group;
//             }

           

//             // return await  _context.Groups.ToListAsync();
//         }

 [HttpPut("delete/{id}")]
        public async Task<ActionResult<groupEntity>> DeleteGroup(int id , groupEntity groupEntity)
        {

           
            // var group = await _context.Groups.FindAsync(e=>e.groupName==groupName);
            var group= await _context.Groups
                .FirstOrDefaultAsync(e => e.groupId == id);
            if (group == null)
            {
                return NotFound();
            }
            else if (await UserExists(group.groupCategory) && await groupActive(group.groupCategory))
{
              group.groupName=groupEntity.groupName;
              group.groupCategory=groupEntity.groupCategory;
              group.active=true;
              group.UpdatedAt_=System.DateTime.Now;

                await _context.SaveChangesAsync();

                    return  group;

            }
else{
    return NotFound();
}
    

        }



[HttpPut("edit/{groupID}")]
        public async Task<ActionResult<groupEntity>> EditGroup(int groupID , groupEntity groupEntity)
        {

                        Console.WriteLine("GROUPCATEGORY",groupEntity);

            // var group = await _context.Groups.FindAsync(e=>e.groupName==groupName);
            var group= await _context.Groups
                .FirstOrDefaultAsync(e => e.groupId == groupID);
            if (group == null)
            {
                return NotFound("groupname does not exists");
            }
            else if (await UserExists(group.groupCategory) && await groupActive(group.groupCategory))
{
              group.groupName=groupEntity.groupName;
              group.groupCategory=groupEntity.groupCategory;
              group.active=true;
              group.UpdatedAt_=System.DateTime.Now;

                await _context.SaveChangesAsync();

                    return  group;

            }
else{
    return NotFound();
}
    

        }


        

    }


    
}