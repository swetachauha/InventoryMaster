using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class godownDTO
    {
        
        public int godownId { get; set; }
        [Required]
         public string godownName { get; set; }
         [Required]
        public string managerName { get; set; }
        [Required]
        public string godownAddress { get; set; }
    }
}