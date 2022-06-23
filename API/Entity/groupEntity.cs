using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace API.Entity
{
    public class groupEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int groupId{ get; set; }

         public string groupName{ get; set; }
        [Remote("IsExist", "Product", ErrorMessage = "serialno exist!")]

         public string groupCategory{ get; set; }

        public DateTime CreatedAt_ { get; set; }=DateTime.Now;


    }
}