using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class TransportEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
         public int Transporter_ID { get; set; }
       public string Transporter_Name { get; set; }
       public string Address{ get; set; }
       public string City{ get; set; }
       public string State{ get; set; }
       public string GST_No{ get; set; }
       public string Phone_No{ get; set; }
       public string Email{ get; set; }

       public string Contact_Person{ get; set; }
        public DateTime Created_At{ get; set; }=DateTime.Now;

    }
}