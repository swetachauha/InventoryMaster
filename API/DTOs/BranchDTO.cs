using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class BranchDTO
    {
       [Required]  
       public string BranchId{ get; set; }

       [Required]  
      public string FirmName{ get; set; }
      [Required]  
      public string BranchName{ get; set; }
      [Required]  
      public string City{ get; set; }
      [Required]  
      public string Address{ get; set; }
    }
}