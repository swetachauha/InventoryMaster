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
        public string PIN_No{ get; set; }
         

        public string GST_No{ get; set; }
        public string PAN_No{ get; set; }
        public string Phone_No{ get; set; }
        public string Contact_Person{ get; set; }
        public string Email{ get; set; }
        public string Party_Type{ get; set; }
    }
}