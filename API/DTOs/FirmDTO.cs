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
        [RegularExpression(@"^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{3}$", ErrorMessage = "GST No cannot exceed 10 characters")]

        public string GST_No{ get; set; }

        [Required]
        [RegularExpression(@"[A-Z]{5}[0-9]{4}[A-Z]{1}", ErrorMessage = "Invalid PAN No")]

        public string PAN_No{ get; set; }

        [Required]
        public string Reg_no{ get; set; }
        [Required]
        public string FSSAI_No{ get; set; }
        [Required]
        public string Contact_Person{ get; set; }
        [Required]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
        public string Contact_Mobile{ get; set; }
        [Required]
[EmailAddress(ErrorMessage = "Invalid Email Address")]
        public  string Email{ get; set; }
        [Required]
      
    [RegularExpression(@"((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)", ErrorMessage = "Not a valid website URL")]

        public  string Website{ get; set; }
        [Required]
        public  string Bank_Name{ get; set; }
        [Required]
        [RegularExpression(@"[0-9]{14,16}$", ErrorMessage = "Account No cannot exceed 16 digits")]

        public  string Account_No{ get; set; }
        [Required]
        [RegularExpression(@"^[A-Za-z]{4}0[A-Z0-9a-z]{6}$", ErrorMessage = "Invalid IFSC Code")]
        public  string IFSC_Code{ get; set; }
        [Required]
        public  string Bank_Address{ get; set; }
    }
}