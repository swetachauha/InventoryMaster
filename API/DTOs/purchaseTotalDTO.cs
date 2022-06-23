using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class purchaseTotalDTO
    {
        public int itemId { get; set; }
        [Required]
        public string itemName { get; set; }
               

        public decimal total { get; set; }
    }
}