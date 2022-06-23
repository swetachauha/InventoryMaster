using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class purchaseTotalEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       public int ID { get; set; }
        public int itemId { get; set; }
        public string itemName { get; set; }
         [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]

        public decimal total { get; set; }

        
    }
}