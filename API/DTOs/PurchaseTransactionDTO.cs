using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PurchaseTransactionDTO
    {
        public int purchaseID { get; set; }
         [Required]
         public string ItemName{ get; set; }
        [Required]
        public string HSN_No { get; set; }
        [Required]
        public decimal Quantity{ get; set; }
        [Required]
        public string Unit{ get; set; }
        [Required]
        public decimal Price{ get; set; }
        [Required]
        public string Tax { get; set; }
        [Required]
        public decimal Total_Amount { get; set; }
    }
}