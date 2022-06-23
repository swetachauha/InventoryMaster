using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class FirmDTO
    {

        // [Required]
        public string FirmLogo{ get; set; }
        [Required]
        public string FirmName{ get; set; }
        [Required]
        public string FirmAddress{ get; set; }

        // [Required]
        public string FirmLocation{ get; set; }

        [Required]
        public string GST_No{ get; set; }

        [Required]
        public string PAN_No{ get; set; }

        [Required]
        public string Reg_no{ get; set; }
        [Required]
        public string FSSAI_No{ get; set; }
        [Required]
        public string Contact_Person{ get; set; }
        [Required]
        public string Contact_Mobile{ get; set; }
        [Required]
// [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public  string Email{ get; set; }
        [Required]
// [EmailAddress(ErrorMessage = "Invalid Website Address")]

        public  string Website{ get; set; }
        [Required]
        public  string Bank_Name{ get; set; }
        [Required]
        public  string Account_No{ get; set; }
        [Required]
        public  string IFSC_Code{ get; set; }
        [Required]
        public  string Bank_Address{ get; set; }
    }
}