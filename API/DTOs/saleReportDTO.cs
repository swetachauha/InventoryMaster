using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class saleReportDTO
    {
        public int saleReportId { get; set; }
        [Required]
        public DateTime fromDate { get; set; }
        [Required]
        public DateTime toDate { get; set; }
        [Required]
        public string godownName { get; set; }
        [Required]
        public string itemName{ get; set; }
        [Required]
        public decimal quantity { get; set; }
        public string unit { get; set; }
    }
}