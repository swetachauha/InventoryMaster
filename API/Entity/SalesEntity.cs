using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class SalesEntity
    {
       
       
        public string Customer_Name{ get; set; }
        public string Address{ get; set; }
        public string City{ get; set; }
        public string State{ get; set; }
        public  string GST_No { get; set; }
        public string Phone_No{ get; set; }
        public string Purchase_Order_no{ get; set; }
        public string Builty_No{ get; set; }
        public string Transport{ get; set; }
        public string Document_Through{ get; set; }
        [Key , Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Sales_Invoice_No{ get; set; }

        public DateTime Sales_Invoice_Date{ get; set; }

        public DateTime Sales_Date{ get; set; }
        public DateTime Purchase_Order_Date{ get; set; }
        public DateTime Builty_Date{ get; set; }


    }
}