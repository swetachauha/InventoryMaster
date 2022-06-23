using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class saleEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int saleId { get; set; }
        public DateTime saleDate { get; set; }
        public string godownName { get; set; }
        public string groupName { get; set; }
        public string itemName { get; set; }
         [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal quantity { get; set; }
        public string unit { get; set; }
         public DateTime CreatedAt_ { get; set; }=DateTime.Now;




        
    }
}