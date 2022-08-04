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

       
        // public DateTime CreatedAt_ { get; set; }=DateTime.Now;
    }
}