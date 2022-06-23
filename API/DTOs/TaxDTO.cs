using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class TaxDTO
    {
        public int taxID { get; set; }
        [Required]
        public String taxType { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]
        public decimal taxPerc { get; set; }
    }
}