// // using System.Web.Http;
// using System.Data;
// using API.Data;

// using API.DTOs;
// using API.Entity;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// // using static System.FormattableString;  
// using System.Data.SqlClient;
// using Dapper;


// // using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
  
//     public class purchaseTotalController:BaseApiController
//     {
//          private readonly DataContext _context;
//         public purchaseTotalController(DataContext context)
//         {
//             _context = context;
//         }

// [HttpGet]
// public async Task<IEnumerable<purchaseTotalDTO>> GetCompanies()
// {
      
//     // var query=$"Declare @total decimal Execute purchaseTotalProcedure @total output;";
//     var query="SELECT itemName, SUM(quantity) AS total FROM Purchase GROUP BY itemName ;";
//     using (var connection = _context.CreateConnection())
//     {
//         var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
//                foreach(var purchaseItem in purchaseList)
//                 {
//                     var result = await _context.Items
//                             .FirstOrDefaultAsync(e => e.itemName == purchaseItem.itemName);
                            
//                             purchaseItem.total=purchaseItem.total+result.openingQuantity;
//                             }
      
          
//             return purchaseList.ToList();
//     }
// }
//   private async Task<bool> itemExists(string itemName)
//         {
//             return await _context.PurchaseTotal.AnyAsync(x => x.itemName == itemName);
//         }

//  [HttpPut]
// public async Task<IEnumerable<purchaseTotalDTO>>PostTotal()
// {
//       var query=$"Declare @total decimal Execute purchaseTotalProcedure @total output;";
//     using (var connection = _context.CreateConnection())
//     {
//         var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
//        foreach(var item in purchaseList)
//         {
//             Console.Write($"items {item.itemName}");
//             // item not present in table create it else update its total
//             //  if ( await itemExists(item.itemName))
//             // {
//             //     var query1="Update PurchaseTotal set total=";

//             // }
//             // else
//             // {
//                 var purchaseTotal=new purchaseTotalEntity
//                  {
//                     itemId=item.itemId,
//                     itemName=item.itemName,
//                     total=item.total
//                 };
//                 _context.PurchaseTotal.Add(purchaseTotal);
//                 await _context.SaveChangesAsync(); 
//             // }

           
//         }
          
//             return purchaseList.ToList();
//     }
 
// }

//     }
// }