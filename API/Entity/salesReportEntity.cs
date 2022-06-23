using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class salesReportEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int saleReportId { get; set; }
        public DateTime fromDate { get; set; }
        public DateTime toDate { get; set; }
        public string godownName { get; set; }
        public string itemName{ get; set; }
        // [RegularExpression(@"^[0-9]+(\.[0-9]{0,2})?", ErrorMessage="Only Numeric values are allowed.")]
         [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity { get; set; }
        public string unit { get; set; }


    }
}