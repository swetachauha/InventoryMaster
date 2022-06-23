using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class itemDetailsDTO
    {
        // [Required]
         public int itemId { get; set; }

        [Required]
         public string itemName { get; set; }

        // [Required]
        public int groupId { get; set; }

        // [Required]
         public string groupName { get; set; }

        [Required]
        public string serialNo { get; set; }
        [Required]
         public string ModelNo { get; set; }
         [Required]
         public float Price { get; set; }


       [Required]
        public DateTime dateOfPurchase  { get; set; }

       [Required]
        public int warranty { get; set; }

       [Required]
        public string remark { get; set; }
    }
}