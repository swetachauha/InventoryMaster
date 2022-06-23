using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class UnitEntity
    {
         [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ID { get; set; }
        public string Unit  { get; set; }
        public string Acronymn { get; set; }
        public DateTime _CreatedAt  { get; set; }=DateTime.Now;


    }
}