using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class BankEntity
    {
        public string BankName{ get; set; }
        [Key]
        public string IFSC_Code{ get; set; }
        public string Address{ get; set; }
        public string City{ get; set; }
        


        
    }
}