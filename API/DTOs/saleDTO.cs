using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class saleDTO
    {
        public int saleId { get; set; }
        [Required]
        public DateTime saleDate { get; set; }
         [Required]
        public string godownName { get; set; }
         [Required]
        public string groupName { get; set; }
         [Required]
        public string itemName { get; set; }
         [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity { get; set; }
         

    }
}