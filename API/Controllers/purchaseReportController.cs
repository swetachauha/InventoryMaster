using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class purchaseReportController
    {
         private readonly DataContext _context;

        public purchaseReportController(DataContext context)
        {
            _context = context;
        }

       
      



    [HttpGet("{dateStart}/{dateEnd}/{itemName}")]
    public async Task<IEnumerable<purchaseEntity>> Search( DateTime dateStart, DateTime dateEnd, string itemName)
    {
        var query=_context.Purchase.AsQueryable();
        query=query.Where(u=>u.purchaseDate>=dateStart && u.purchaseDate<=dateEnd && u.itemName==itemName);
        return await query.ToListAsync();
    }
    }
}