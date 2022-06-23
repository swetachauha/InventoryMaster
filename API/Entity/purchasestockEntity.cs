using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class purchasestockEntity
    {
        public int id { get; set; }
        public string itemName { get; set; }
        public decimal totalPurchase { get; set; }
        
        public decimal totalStockQuantity { get; set; }

        public DateTime CreatedAt_ { get; set; }=DateTime.Now;
    }
}