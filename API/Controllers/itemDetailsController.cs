using API.Data;
using API.DTOs;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class itemDetailsController :BaseApiController
    {
         private readonly DataContext _context;
        public itemDetailsController(DataContext context)
        {
            _context = context;
        }

        // saveItem POST
        [HttpPost("addItemDetails")]
        public async Task<ActionResult<itemDetailsDTO>> Item(itemDetailsDTO itemDetailsDTO)
        {
             var item = await _context.Items
                .FirstOrDefaultAsync(e => e.itemName == itemDetailsDTO.itemName);
            // if item alreadyexists throw err
            // if (await ItemExists(registerDTO.UserName))
            // {
            //     Console.WriteLine("exists", registerDTO);
            //     return BadRequest("UserName already taken");

            // }
            if (item != null)
            {
             var itemDetails = new ItemDetailsEntity
                {   
                    itemId=item.itemId,
                    itemName = itemDetailsDTO.itemName,
                    // groupId=item.groupId,
                    groupName = item.groupName,
                    serialNo=itemDetailsDTO.serialNo,
                    ModelNo=itemDetailsDTO.ModelNo,
                    Price=itemDetailsDTO.Price,
                    dateOfPurchase=DateTime.Now,
                    warranty=itemDetailsDTO.warranty,
                    remark=itemDetailsDTO.remark
                    
                };
                _context.ItemDetails.Add(itemDetails);
                await _context.SaveChangesAsync();
                var display= new itemDetailsDTO
                {
                    
                    itemId = itemDetails.itemId,
                    itemName=itemDetails.itemName,
                    groupId=itemDetails.groupId,
                    groupName=itemDetails.groupName,
                    serialNo=itemDetails.serialNo,
                    ModelNo=itemDetails.ModelNo,
                    Price=itemDetails.Price,
                    dateOfPurchase=itemDetails.dateOfPurchase,
                    warranty=itemDetails.warranty,
                    remark=itemDetails.remark
                    
                };
              return display;
            }
           
                else
            {
                return NotFound("No item found");
            }
            


        }

         [HttpGet("displayItemDetails")]
        public async Task<ActionResult<IEnumerable<ItemDetailsEntity>>> GetItems()
        {

            return await  _context.ItemDetails.ToListAsync();
        }
        // [HttpGet("id")]
        // public async Task<ActionResult<IEnumerable<ItemDetailsEntity>>> GetItemsBy()
        // {

        //     var tblEmployee = await _context.ItemDetails.FindAsync(id);
 
        //     if (tblEmployee == null)
        //     {
        //         return NotFound();
        //     }
 
        //     return tblEmployee;
        // }

         [HttpDelete("{serialNo}")]
        public async Task<ActionResult<ItemDetailsEntity>> DeleteItem( int serialNo)
        {
            var item = await _context.ItemDetails.FindAsync(serialNo);
            if (item == null)
            {
                return NotFound();
            }
 
            _context.ItemDetails.Remove(item);
            await _context.SaveChangesAsync();
 
            return item;
        }
        [HttpGet("{serialNo}")]

        public async Task<ItemDetailsEntity> GetItemDetailsBySerialNo(string serialNo)
        {
            
            return await _context.ItemDetails
                .FirstOrDefaultAsync(e => e.serialNo == serialNo);
        }

       [HttpPut("{serialNo}")]
        public async Task<ActionResult<ItemDetailsEntity>> UpdateItemsDetails(string serialNo, ItemDetailsEntity itemDetailsEntity)
        {
            try
            {
                if (serialNo != itemDetailsEntity.serialNo)
                {
                    return BadRequest("serial No not found");
                }

                var itemToUpdate = await GetItemDetailsBySerialNo(serialNo);

               if (itemToUpdate == null)
                {
                    return NotFound($"Item of serialNo {serialNo} not found");
                }
                var result = await _context.ItemDetails
                            .FirstOrDefaultAsync(e => e.itemId == itemDetailsEntity.itemId);
                if (result != null)
                {
                    // result.itemId=itemsEntity.itemId;
                    result.itemName = itemDetailsEntity.itemName;
                     result.itemId=itemDetailsEntity.itemId;
                    result.groupId=itemDetailsEntity.groupId;
                    result.groupName=itemDetailsEntity.groupName;
                    result.serialNo=itemDetailsEntity.serialNo;
                    result.ModelNo=itemDetailsEntity.ModelNo;
                    result.Price=itemDetailsEntity.Price;
                    result.dateOfPurchase=itemDetailsEntity.dateOfPurchase;
                    result.warranty=itemDetailsEntity.warranty;
                    result.remark=itemDetailsEntity.remark;

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


    }
}