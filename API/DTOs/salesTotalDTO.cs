using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class salesTotalDTO
    {
         public int ID { get; set; }
        public int itemId { get; set; }
        public string itemName { get; set; }
        public decimal total { get; set; }
    }
}