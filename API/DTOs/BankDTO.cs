using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class BankDTO
    {
        [Required]
        public string BankName{ get; set; }
        [Required]
        public string IFSC_Code{ get; set; }
        [Required]
        public string Address{ get; set; }
        [Required]
        public string City{ get; set; }
     
       
    }
}