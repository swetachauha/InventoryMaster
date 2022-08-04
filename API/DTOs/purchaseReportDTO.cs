using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class purchaseReportDTO
    {
        public int purchaseReportId { get; set; }
        [Required]
        public DateTime fromDate { get; set; }
        [Required]
        public DateTime toDate { get; set; }
        [Required]
        public string itemName{ get; set; }

       
    }
}