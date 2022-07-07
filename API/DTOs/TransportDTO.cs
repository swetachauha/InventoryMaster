using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class TransportDTO
    {
        [Required]
        public string Transporter_Name { get; set; }
       [Required]
       public string Address{ get; set; }
       [Required]
       public string City{ get; set; }
       [Required]
       public string State{ get; set; }
       [Required]
       public string GST_No{ get; set; }
       [Required]
       public string Phone_No{ get; set; }
       [Required]
       public string Email{ get; set; }

       [Required]
       public string Contact_Person{ get; set; }
    }
}