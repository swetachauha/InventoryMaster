// using API.Data;
// using API.DTOs;
// using API.Entity;
// using Dapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
//     public class saleController:BaseApiController
//     {
//          private readonly DataContext _context;

//         public saleController(DataContext context )
//         {
//             _context = context;
//         }

//         [HttpGet]
//          public async Task<ActionResult<IEnumerable<saleEntity>>> GetAllSales()
//         {

//             return await  _context.Sale.ToListAsync();
//         }
//          [HttpPost]
//         public async Task<ActionResult<IEnumerable<saleEntity>>> AddSale(saleDTO saleDTO )
//         {

//               var itemUnit=await _context.Items.FirstOrDefaultAsync(x =>x.itemName==saleDTO.itemName);
//             if(itemUnit!=null)
//             {
//                 var unit=itemUnit.unit;

                

//                             var query="SELECT itemName, SUM(quantity) AS total FROM Purchase GROUP BY itemName ;";
//             using (var connection = _context.CreateConnection())
//             {
//                 var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
//                 foreach(var purchaseItem in purchaseList)
//                 {
//                     var result = await _context.Items.FirstOrDefaultAsync(e => e.itemName == purchaseItem.itemName);
                            
//                     purchaseItem.total=purchaseItem.total+result.openingQuantity;
//                 }
//       var p=purchaseList.FirstOrDefault(e=>e.itemName==saleDTO.itemName);
//             if(saleDTO.quantity<=p.total)
//             {
//             var sale = new saleEntity
//                 {
//                     saleId=saleDTO.saleId,
//                     saleDate=saleDTO.saleDate,
//                     godownName=saleDTO.godownName ,
//                     groupName=saleDTO.groupName,
//                     itemName=saleDTO.itemName,
//                     quantity=saleDTO.quantity,
//                     unit=unit                 
//                 };
//                 _context.Sale.Add(sale);
//                 await _context.SaveChangesAsync();

//                  return await  _context.Sale.ToListAsync();

//             }
            
//             else{
//                 return BadRequest();
//             }
              
               
 
    
//             //  var result = await _context.Purchase.FirstOrDefaultAsync(e=>e.itemName==saleDTO.itemName);
            
         
               
               
//                 return await  _context.Sale.ToListAsync();
 
            

//             }
            

//                 return await  _context.Sale.ToListAsync();

        
        

//     }
//                     return await  _context.Sale.ToListAsync();

// }
                

//     }
// }