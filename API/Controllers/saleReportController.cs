using System.Globalization;
using System.Text.RegularExpressions;
// using System.Web.Http;
using API.Data;
using API.Entity;
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
    public async Task<IEnumerable<saleEntity>> Search( DateTime dateStart, DateTime dateEnd, string itemName)
    {
        Console.WriteLine($"start{dateStart}");
        Console.WriteLine($"end{dateEnd}");

        var query=_context.Sale.AsQueryable();
        query=query.Where(u=>u.saleDate>=dateStart && u.saleDate<=dateEnd && u.itemName==itemName);
            return await query.ToListAsync();
    }
    }
}