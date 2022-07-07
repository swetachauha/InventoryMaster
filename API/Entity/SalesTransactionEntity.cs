using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class SalesTransactionEntity
    {
         [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]


        public int salesTransactionID { get; set; }
        public int Sales_Invoice_No { get; set; }

        public string ItemName{ get; set; }
        public string HSN_No { get; set; }
        public decimal Quantity{ get; set; }
        public string Unit{ get; set; }
        public decimal Price{ get; set; }
        public string IGST { get; set; }
        public string CGST { get; set; }

        public string SGST { get; set; }

        public decimal Total_Amount { get; set; }

    }
}