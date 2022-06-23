using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using Dapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class purchaseStockController:BaseApiController
    {
           private readonly DataContext _context;
        public purchaseStockController(DataContext context)
        {
            _context = context;
        }
        [HttpPost]
         public async Task<IEnumerable<ItemDTO>> GetTotalPurchaseStock(List<purchaseTotalDTO> list)
        {
            var en = new List<ItemDTO>{};
            IEnumerable<ItemDTO>  openingQuantity=en;

            // var arr = new List<ItemDTO>{};
            // IEnumerable<ItemDTO>  storingarr=arr;

            IEnumerable<ItemDTO> myList = new List<ItemDTO>();


            foreach (var item in list)
            {
                var itemname=item.itemName;
                var query=$"Execute getOpeningQuantityFromItems @itemName="+@itemname;
                var q2="Select Items.itemName , Items.openingQuantity, PurchaseTotal.total from Items i INNER JOIN PurchaseTotal p ON i.itemName=p.itemName";
                using (var connection = _context.CreateConnection())
                {
                     openingQuantity = await connection.QueryAsync<ItemDTO>(query);
                     Console.Write($"opening {openingQuantity}");
                    //  foreach (var x in openingQuantity)
                    //  {
                    //     var totalStock=x+item.total;  
                    //     totalList.Add(totalStock);
                    //  }
                    // return openingQuantity.ToList();
                    // myList.Add(openingQuantity);
           return openingQuantity.ToList();

                }

            }
           return openingQuantity.ToList();

        }

        // [HttpPost]
        // public async Task<IEnumerable<purchaseTotalDTO>> GetTotalPurchaseStock(purchaseTotalDTO list)
        // {
        //     var query=$"Declare @total decimal Execute purchaseTotalProcedure @total output;";
        //     using (var connection = _context.CreateConnection())
        //     {
        //         var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
        //         foreach(var item in purchaseList)
        //         {    
        //             var iname=item.itemName;
        //             Console.Write($"openings{iname}");

        //             var openingQuantity=$"Execute getItemName @itemName='sugar'";
        //             var hj="select Item.itemName , Item.OpeningQuantity ,PurchaseTotal.total from Items JOIN PurchaseTotal ON Items.itemName=PurchaseTotal.itemName";
        //             var openingQuantityList = await connection.QueryAsync<ItemDTO>(openingQuantity);

        //             Console.Write($"openings{openingQuantityList}");
        //             // var initStockTotal=openingQuantity;
        //             // Console.Write($"openings",initStockTotal);

        //             // Console.Write($"openings {item.itemName}");


        //         }
        //         return purchaseList.ToList();
        //     }
        // }
    }
}