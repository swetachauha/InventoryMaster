using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class BranchEntity
    {
        [Key]
        // [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public string BranchId{ get; set; }

         public string FirmName{ get; set; }

        public string BranchName{ get; set; }
        public string City{ get; set; }
        public string Address{ get; set; }



    }
}