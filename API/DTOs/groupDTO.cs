using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class groupDTO
    {
         public int groupId { get; set; }

        [Required]
        public string groupName { get; set; }
        [Required]

         public string groupCategory { get; set; }



    }
}