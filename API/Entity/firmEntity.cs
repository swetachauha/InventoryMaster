using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class firmEntity
    {
        public string FirmLogo{ get; set; }

[Key]
        public string FirmName{ get; set; }
        public string FirmAddress{ get; set; }

        public string FirmLocation{ get; set; }

        public string GST_No{ get; set; }

        public string PAN_No{ get; set; }

        public string Reg_no{ get; set; }
        public string FSSAI_No{ get; set; }
        public string Contact_Person{ get; set; }
        public string Contact_Mobile{ get; set; }
[EmailAddress(ErrorMessage = "Invalid Email Address")]
        public  string Email{ get; set; }
[EmailAddress(ErrorMessage = "Invalid Website Address")]

        public  string Website{ get; set; }

        public  string Bank_Name{ get; set; }

        public  string Account_No{ get; set; }
        public  string IFSC_Code{ get; set; }
        public  string Bank_Address{ get; set; }


    }
}