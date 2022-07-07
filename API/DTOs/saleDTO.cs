using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class saleDTO
    {
      [Required]
       public string Customer_Name { get; set; }
      [Required]
       public string Address { get; set; }
       [Required]
        public string City { get; set; }
      [Required]
       public string GST_No { get; set; }
      [Required]
       public string Phone_No { get; set; }
      [Required]
       public DateTime Sales_Date { get; set; }
      [Required]
       public string Purchase_Order_No { get; set; }
        [Required]
         public DateTime Purchase_Order_Date { get; set; }

      [Required]
       public string Builty_NO { get; set; }
       [Required]
        public DateTime Builty_Date { get; set; }
 [Required]
         public DateTime Sales_Invoice_Date{ get; set; }

        [Required]
         public string Transport { get; set; }
      [Required]
       public string Document_Through { get; set; }


[Required] 
        public List<SalesTransactionDTO> SalesTransaction { get; set; }


    }
}