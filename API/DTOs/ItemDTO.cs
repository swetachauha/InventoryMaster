using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ItemDTO
    {
        // [Required]
      

       

       [Required]
       public string itemName { get; set; }

        [Required]
        public string groupName { get; set; }

        [Required]
        public string HSN_No{ get; set; }
        [Required]
        public string Bar_Code{ get; set; }

        [Required]
         [Range(0, 100, ErrorMessage = "Only positive number allowed")]

        public decimal GST{ get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Only positive number allowed")]

        public decimal Cess{ get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Only positive number allowed")]

        public decimal Execise{ get; set; }
         [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Only positive number allowed")]

         public decimal Purchase_Rate{ get; set; }

        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal margin{ get; set; }
        //  [Required]
        // [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

         public decimal Sales_Rate{ get; set; }

    }
}