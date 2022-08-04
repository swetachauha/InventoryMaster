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
       [RegularExpression(@"^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{3}$", ErrorMessage = "Not a valid GSTNo number")]

       public string GST_No{ get; set; }
       [Required]
       [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
       public string Phone_No{ get; set; }
       [Required]
       [EmailAddress(ErrorMessage = "Invalid Email Address")]
       public string Email{ get; set; }

       [Required]
       public string Contact_Person{ get; set; }
    }
}