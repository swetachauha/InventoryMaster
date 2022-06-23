using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ItemController : BaseApiController
    {
        private readonly DataContext _context;
        // private readonly IMapper _mapper;
        public ItemController(DataContext context
        // , IMapper mapper
        )
        {
            // _mapper = mapper;
            _context = context;
        }

         private async Task<bool> itemExists(string itemName)
        {
            return await _context.Items.AnyAsync(x => x.itemName == itemName);
        }

        // saveItem POST
        [HttpPost]
        public async Task<ActionResult<ItemDTO>> Item(ItemDTO itemDTO)
        {
            // var group = await _context.Groups
            //     .FirstOrDefaultAsync(e => e.groupName == itemDTO.groupName);
            // Console.WriteLine($"FROM group  {group}");

            // if item alreadyexists throw err
            if ( await itemExists(itemDTO.itemName))
            {
                return BadRequest("Item already Exists !!");

            }
            else
            {
                 var item = new ItemsEntity
                {
                    // itemId=itemDTO.itemId,
                   
                    groupName=itemDTO.groupName, 
                    itemName = itemDTO.itemName,
                    HSN_No=itemDTO.HSN_No,
                    Bar_Code=itemDTO.Bar_Code,
                    GST=itemDTO.GST,
                    Cess=itemDTO.Cess,
                    Execise=itemDTO.Execise,
                    Purchase_Rate=itemDTO.Purchase_Rate,
                    margin=itemDTO.margin,
                    Sales_Rate=(itemDTO.Purchase_Rate + ((itemDTO.GST+itemDTO.Cess+itemDTO.Execise)/100)-itemDTO.margin)
                   
                    

                };

                // Console.WriteLine($"NEWITEM , {item.Group.groupName}");

                _context.Items.Add(item);
                await _context.SaveChangesAsync();
                var display = new ItemDTO
                {
                    groupName=item.groupName, 
                    itemName = item.itemName,
                    HSN_No=item.HSN_No,
                    Bar_Code=item.Bar_Code,
                    GST=item.GST,
                    Cess=item.Cess,
                    Execise=item.Execise,
                    Purchase_Rate=item.Purchase_Rate,
                    margin=item.margin,
                    Sales_Rate=item.Sales_Rate
                   

                };
                return display;
           
            }

              

        }
        // display all items
        [HttpGet("displayItems")]
        public async Task<ActionResult<IEnumerable<ItemsEntity>>> GetItems()
        {
            // var items = await _context.Items
            // // .Include(p=>p.groupName)
            // .ToListAsync();
        //    Console.WriteLine($"ITEMSCON, {items}");
            // var itemReturn =_mapper.Map<List<ItemDTO>>(items);
            //            Console.WriteLine($"ITEMSreturn, {itemReturn}");

                       return await  _context.Items.ToListAsync();
     
                  }


        // get item by name
        [HttpGet("displayItems/{itemName}")]

        public async Task<ItemsEntity> GetItemByName(string itemName)
        {
            return await _context.Items
                .FirstOrDefaultAsync(e => e.itemName == itemName);
        }

        // get item by id
        [HttpGet("displayItembyId/{itemId}")]

        public async Task<ItemsEntity> GetItemById(int itemId)
        {
            return await _context.Items
                .FirstOrDefaultAsync(e => e.itemId == itemId);
        }




        // search by itemname or display few or 1 item
        [HttpGet("{groupName}")]
        public async Task<IEnumerable<ItemsEntity>> Search(string groupName)
        {
            IQueryable<ItemsEntity> query = _context.Items;

            // if (!string.IsNullOrEmpty(groupId))
            // {
            //     query = query.Where(e => e.itemName.Contains(itemName));

            // }
            if (groupName != null)
            {
                            // var item = await _context.Items.FindAsync(itemId);

                query = query.Where(e => e.groupName == groupName);
                if(query==null)
                {
                    // return NotFound();
                }

            }
            return await query.ToListAsync();
        }



        // update method


        [HttpPut("{itemId}")]
        public async Task<ActionResult<ItemsEntity>> UpdateItems(int itemId, ItemsEntity itemsEntity)
        {
            try
            {
                // Console.WriteLine($"FROM BODY { itemId}");
                //  Console.WriteLine($"DB ITEMNAME { itemsEntity.itemId}");

                if (itemId != itemsEntity.itemId)
                {
                    return BadRequest("Item Id mismatch");
                }

                var itemToUpdate = await GetItemById(itemId);

               if (itemToUpdate == null)
                {
                    return NotFound($"Item of name {itemId} not found");
                }
                var result = await _context.Items
                            .FirstOrDefaultAsync(e => e.itemId == itemsEntity.itemId);
                if (result != null)
                {
                    // result.itemId=itemsEntity.itemId;
                    result.itemName = itemsEntity.itemName;
                    // result.groupName = itemsEntity.groupName;

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

        //  public async Task<IActionResult> UpdateItems(int itemId , ItemsEntity itemsEntity)
        //  {
        //      if(itemId!=itemsEntity.itemId)
        //      {
        //          return BadRequest();
        //      }
        //      _context.Entry(itemsEntity).State=EntityState.Modified;
        //      try{
        //          await _context.SaveChangesAsync();
        //      }
        //      catch(DbUpdateConcurrencyException)
        //      {
        //          if(!itemExists(itemId))
        //          {
        //              return NotFound();
        //          }
        //          else{
        //              throw;
        //          }
        //      }
        //      return NoContent();
        //  }


        //  delete
        [HttpDelete("{itemId}")]
        public async Task<ActionResult<ItemsEntity>> DeleteItem(int itemId)
        {
            var item = await _context.Items.FindAsync(itemId);
            if (item == null)
            {
                return NotFound();
            }

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();

            return item;
        }


    }
}