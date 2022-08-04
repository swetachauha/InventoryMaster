using System.Globalization;
using System.Text.RegularExpressions;
// using System.Web.Http;
using API.Data;
using API.DTOs;
using API.Entity;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class saleReportController:BaseApiController
    {
         private readonly DataContext _context;

        public saleReportController(DataContext context)
        {
            _context = context;
        }

       
      



   

   [HttpGet("{dateStart}/{dateEnd}/{itemName}")]
    public async Task<IEnumerable<sReportDTO>> Search( DateTime dateStart, DateTime dateEnd, string itemName)
    {
                Console.WriteLine($"QUERYSWETA, {dateStart}");
 var query=$"select * from Sales pM join SalesTransaction pT On pM.Sales_Invoice_No=pT.Sales_Invoice_No where pM.Sales_Date>="+"'"+@dateStart+"'"+" and pM.Sales_Date<="+"'"+@dateEnd+"'"+" and ItemName="+"'"+@itemName+"'";
 using (var connection = _context.CreateConnection())
    {
        var purchaseList = await connection.QueryAsync<sReportDTO>(query);
      
          
            return purchaseList.ToList();
    }


    }
    }
}