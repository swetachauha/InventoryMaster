using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.DTOs
{
    public class PartyDTO
    {
        
        [Required]
        public int ID { get; set; }
        [Required]
        public string Party_Name{ get; set; }
        [Required]
        public string Party_Address{ get; set; }
        [Required]
        public string City{ get; set; }
        [Required]
        public string State{ get; set; }
        [Required]
        [RegularExpression(@"[0-9]{6}$", ErrorMessage = "Pin No cannot exceed 6 characters")]


        public string PIN_No{ get; set; }
        [Required]
        [RegularExpression(@"^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{3}$", ErrorMessage = "GST No cannot exceed 10 characters")]

        public string GST_No{ get; set; }
        [Required]
        [RegularExpression(@"[A-Z]{5}[0-9]{4}[A-Z]{1}", ErrorMessage = "Invalid PAN No")]
        public string PAN_No{ get; set; }
        [Required]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]


        public string Phone_No{ get; set; }
        [Required]
        public string Contact_Person{ get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]

        public string Email{ get; set; }
        [Required]
        public string Party_Type{ get; set; }
    }
}