using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using System;  
using System.Collections.Generic;  
using System.IO;  
using System.Linq;  
using System.Net;  
using System.Net.Http;  
using System.Net.Http.Headers;  
using System.Web;  
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
// using FileUploadAPI.Models;  
namespace API.Controllers
{
    public class UploadImage:BaseApiController
    {
        private readonly DataContext _context;
        public UploadImage(DataContext context)
        {
            _context = context;
        }

          
    [HttpGet("{PAN_No}")]

        public async Task<firmEntity> getFirmByPan_No(string PAN_No)
        {
            return await _context.Firm
                .FirstOrDefaultAsync(e => e.PAN_No == PAN_No);
        }

        [HttpPut("{PAN_No}")]
        public async Task<ActionResult<string>> UpdatePhoto(UploadImageDTO firmDTO,string PAN_No)
        {
            try
            {


              
                var result = await _context.Firm
                            .FirstOrDefaultAsync(e => e.PAN_No == PAN_No);

                if (result != null)
                {
                    
                    result.FirmLogo=firmDTO.FirmLogo;

                    await _context.SaveChangesAsync();
                    return result.FirmLogo;
                }
                return null;

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating Logo");
            }
        }




      
    }
}