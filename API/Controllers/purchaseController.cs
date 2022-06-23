// using API.Data;
// using API.DTOs;
// using API.Entity;
// using Dapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
//     public class purchaseController:BaseApiController
//     {
//          private readonly DataContext _context;

//         public purchaseController(DataContext context )
//         {
//             _context = context;
//         }

//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<purchaseEntity>>> GetAllPurchases()
//         {

//             return await  _context.Purchase.ToListAsync();
//         }

//         [HttpGet("total")]
// public async Task<IEnumerable<purchaseTotalDTO>> GetCompanies()
// {
      
//     // var query=$"Declare @total decimal Execute purchaseTotalProcedure @total output;";
//     var query="SELECT itemName, SUM(quantity)) AS TOTALAMOUNT FROM Purchase GROUP BY itemName ;";
//     using (var connection = _context.CreateConnection())
//     {
//         var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
      
          
//             return purchaseList.ToList();
//     }
// }

//         [HttpPost]
//         public async Task<ActionResult<IEnumerable<purchaseEntity>>> AddPurchase(purchaseDTO purchaseDTO)
//         {
          
//             var itemUnit=await _context.Items.FirstOrDefaultAsync(x =>x.itemName==purchaseDTO.itemName);
//             if(itemUnit!=null)
//             {
//                 var unit=itemUnit.Unit;

//                    var purchase = new purchaseEntity
//                 {
//                     // purchaseId=purchaseDTO.purchaseId,
//                     purchaseDate=purchaseDTO.purchaseDate,
//                     itemName=purchaseDTO.itemName,
//                     quantity=purchaseDTO.quantity,
//                     unit=unit
                    
//                 };
//                  _context.Purchase.Add(purchase);
//                 await _context.SaveChangesAsync();
//             }
         
               
               
//                 return await  _context.Purchase.ToListAsync();
 
            
//         }

//     }
// }