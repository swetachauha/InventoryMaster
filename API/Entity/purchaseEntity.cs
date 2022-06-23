using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class purchaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int purchaseId { get; set; }
        public DateTime purchaseDate { get; set; }
        public string itemName { get; set; }
         [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity  { get; set; }
        public string unit { get; set; }
        public DateTime CreatedAt_ { get; set; }=DateTime.Now;




    }
}