using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class purchaseMasterDTO
    {
       [Required] 
       public  string  Vendor_Name{ get; set; }
    //    [Required] 
    //    public  string Address{ get; set; }
    //    [Required] 
    //    public  string City{ get; set; }
    //    [Required] 
    //    public  string Phone_No{ get; set; }
    //    [Required] 
    //    public  DateTime purchaseDate{ get; set; }
       [Required] 
       public  string Purchase_Invoice_NO{ get; set; }
       [Required] 
       public  DateTime Purchase_Invoice_Date{ get; set; }
       [Required] 
       public  string Purchase_Order_No{ get; set; }
       [Required] 
       public  DateTime Purchase_Order_Date{ get; set; }

 [Required] 
        public List<PurchaseTransactionDTO> PurchaseTransaction { get; set; }

    }
}