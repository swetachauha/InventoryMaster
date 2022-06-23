using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entity
{
    public class godownEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int godownId { get; set; }
        public string godownName { get; set; }
        public string managerName { get; set; }
        public string godownAddress { get; set; }

        public DateTime CreatedAt_ { get; set; }=DateTime.Now;

    }
}