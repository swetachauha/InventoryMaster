using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class TransportEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
         public int Transporter_ID { get; set; }
       public string Transporter_Name { get; set; }
       public string Address{ get; set; }
       public string City{ get; set; }
       public string State{ get; set; }
    [RegularExpression(@"^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{3}$", ErrorMessage = "Not a valid GSTNo number")]

       public string GST_No{ get; set; }
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]

       public string Phone_No{ get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]

       public string Email{ get; set; }

       public string Contact_Person{ get; set; }
        public DateTime Created_At{ get; set; }=DateTime.Now;

    }
}