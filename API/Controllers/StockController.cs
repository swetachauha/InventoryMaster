// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using API.Data;
// using API.DTOs;
// using Dapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
//     public class StockController:BaseApiController
//     {
//         private readonly DataContext _context;

//         public StockController(DataContext context )
//         {
//             _context = context;
//         }


//           [HttpGet]
//         public async Task<IEnumerable<purchaseTotalDTO>> GetStock()
//         {
//             var query="SELECT itemName, SUM(quantity) AS total FROM Purchase GROUP BY itemName ;";
//             var querySale="SELECT itemName,SUM (quantity) as total FROM Sale GROUP BY itemName;";
//             var queryItem="Select * from Items;";
//             using (var connection = _context.CreateConnection())
//             {
//                 var totalList=new List<purchaseTotalDTO>();
//                 var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
//                 var saleList = await connection.QueryAsync<salesTotalDTO>(querySale);
//                 var itemList = await connection.QueryAsync<ItemDTO>(queryItem);

//                 foreach(var item in itemList)
//                 {
//                     Console.Write($"itemList  {item.itemName}");
//                         // itemList.total=item.openingQuantity;


//                     foreach(var purchaseItem in purchaseList)
//                     {
//                     Console.WriteLine($"puchaseList {purchaseItem.itemName}");
//                       if(purchaseItem.itemName==item.itemName   )
//                     {    
                       
//                      purchaseItem.total=purchaseItem.total+item.openingQuantity;
//                      Console.WriteLine($"PURCHASEItem {purchaseItem.total}");
 
//                     }
                  

//                      foreach(var saleItem in saleList)
//                  {
//                     if(purchaseItem.itemName==item.itemName && saleItem.itemName==purchaseItem.itemName && saleItem.itemName== item.itemName)
//                     {  
//                      purchaseItem.total=purchaseItem.total-saleItem.total;
//                      Console.Write($"SALEItem {purchaseItem.total}");

//                     }
                    
                
                   
//                  }
                
                   

                            
//                 }
//                 }
               
                
//                 return purchaseList.ToList();
      
//             }
//         }

//         // [HttpGet]
//         // public async Task<IEnumerable<purchaseTotalDTO>> GetStock()
//         // {
//         //     var query="SELECT itemName, SUM(quantity) AS total FROM Purchase GROUP BY itemName ;";
//         //     var querySale="SELECT itemName,SUM (quantity) as total FROM Sale GROUP BY itemName;";
            
//         //     using (var connection = _context.CreateConnection())
//         //     {
                
//         //         var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
//         //         var saleList = await connection.QueryAsync<salesTotalDTO>(querySale);

//         //         foreach(var purchaseItem in purchaseList)
//         //         {

//         //             Console.Write($"purchasItem {purchaseItem.total}");
//         //             var result = await _context.Items.FirstOrDefaultAsync(e => e.itemName == purchaseItem.itemName);
                           
//         //              purchaseItem.total=purchaseItem.total+result.openingQuantity;

                            
//         //         }
//         //          foreach(var saleItem in saleList)
//         //          {

//         //          }

//         //         return purchaseList.ToList();
      
//         //     }
//         // }


//     }
// }