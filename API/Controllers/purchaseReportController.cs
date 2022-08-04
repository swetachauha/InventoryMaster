using API.Data;
using API.DTOs;
using API.Entity;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class purchaseReportController:BaseApiController
    {
         private readonly DataContext _context;

        public purchaseReportController(DataContext context)
        {
            _context = context;
        }

       
      



    [HttpGet("{dateStart}/{dateEnd}/{itemName}")]
    public async Task<IEnumerable<pReportDTO>> Search( DateTime dateStart, DateTime dateEnd, string itemName)
    {
                Console.WriteLine($"QUERYSWETA, {dateStart}");
var query=$"select * from PurchaseMaster pM join PurchaseTransaction pT On pM.purchaseID=pT.purchaseID where pM.Purchase_Order_Date>="+"'"+@dateStart+"'"+" and pM.Purchase_Order_Date<="+"'"+@dateEnd+"'"+" and ItemName="+"'"+@itemName+"'";
 using (var connection = _context.CreateConnection())
    {
        var purchaseList = await connection.QueryAsync<pReportDTO>(query);
      
          
            return purchaseList.ToList();
    }


    }
    }
}