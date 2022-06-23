using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class purchaseReportEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int purchaseReportId { get; set; }
        public DateTime fromDate { get; set; }
        public DateTime toDate { get; set; }
        public string itemName{ get; set; }
         [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity { get; set; }
        public string unit { get; set; }
        public DateTime CreatedAt_ { get; set; }=DateTime.Now;
    }
}