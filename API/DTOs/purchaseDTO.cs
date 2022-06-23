using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class purchaseDTO
    {
        
        public int purchaseId { get; set; }
        [Required]
        public DateTime purchaseDate { get; set; }
        [Required]
        public string itemName { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity  { get; set; }
        
            }
}