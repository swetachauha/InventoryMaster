using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class PurchaseMasterEntity
    {
         [Key]
         [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int purchaseID { get; set; }
        public  string  Vendor_Name{ get; set; }
        public  string Address{ get; set; }
        public  string City{ get; set; }
        public  string Phone_No{ get; set; }
        public  DateTime purchaseDate{ get; set; }
        public  string Purchase_Invoice_NO{ get; set; }
        public  DateTime Purchase_Invoice_Date{ get; set; }
        public  string Purchase_Order_No{ get; set; }
        public  DateTime Purchase_Order_Date{ get; set; }

    }
}