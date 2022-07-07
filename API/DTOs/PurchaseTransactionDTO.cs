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
        // [Required]
        public string HSN_No { get; set; }
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Please enter positive quantity")]

        public decimal Quantity{ get; set; }
        [Required]
        public string Unit{ get; set; }
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Price can not be negative")]

        public decimal Price{ get; set; }
        [Range(0, 100, ErrorMessage = "Tax can not be negative and more than 100%")]

        public string IGST { get; set; }

         [Range(0, 100, ErrorMessage = "Tax can not be negative and more than 100%")]

        public string CGST { get; set; }

         [Range(0, 100, ErrorMessage = "Tax can not be negative and more than 100%")]

        public string SGST { get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Amount should be positive quantity")]

        public decimal Net_Amount { get; set; }
    }
}