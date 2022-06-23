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
    public class salesTotalController :BaseApiController
    {
        private readonly DataContext _context;
        public salesTotalController(DataContext context)
        {
            _context = context;
        }
[HttpGet]
public async Task<IEnumerable<salesTotalDTO>> GetCompanies()
{
      
    var query="SELECT itemName,SUM (quantity) as total FROM Sale GROUP BY itemName;";
    using (var connection = _context.CreateConnection())
    {
        var saleList = await connection.QueryAsync<salesTotalDTO>(query);
        return saleList.ToList();
    }
}
    }
}