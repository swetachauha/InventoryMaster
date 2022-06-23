using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace API.Entity
{
    public class ItemsEntity
    {  
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int itemId{ get; set; }
        //  public string groupName{ get; set; }

        [Remote("IsExist", "Product", ErrorMessage = "item Name already exists!")]

        public string itemName { get; set; }

        public string groupName { get; set; }

        public string HSN_No{ get; set; }
        public string Bar_Code{ get; set; }

        public decimal GST{ get; set; }
        public decimal Cess{ get; set; }
        public decimal Execise{ get; set; }
         public decimal Purchase_Rate{ get; set; }

        public decimal margin{ get; set; }
         public decimal Sales_Rate{ get; set; }

        public DateTime CreatedAt_ { get; set; }=DateTime.Now;


    }
}