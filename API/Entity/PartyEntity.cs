using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class PartyEntity
    {
          [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ID { get; set; }
        public string Party_Name{ get; set; }
        public string Party_Address{ get; set; }
        public string City{ get; set; }
        public string State{ get; set; }
                [RegularExpression(@"[0-9]{6}$", ErrorMessage = "Pin No cannot exceed 6 characters")]
        public string PIN_No{ get; set; }
         
        [RegularExpression(@"^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{3}$", ErrorMessage = "GST No cannot exceed 10 characters")]
        public string GST_No{ get; set; }
                [RegularExpression(@"[A-Z]{5}[0-9]{4}[A-Z]{1}", ErrorMessage = "Invalid PAN No")]
        public string PAN_No{ get; set; }
                [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]

        public string Phone_No{ get; set; }
        public string Contact_Person{ get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]

        public string Email{ get; set; }
        public string Party_Type{ get; set; }
    }
}