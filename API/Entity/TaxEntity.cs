using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class TaxEntity
    {
          [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ID { get; set; }
        public string TaxType  { get; set; }
        [Range(1, int.MaxValue, ErrorMessage = "Only positive number allowed")]
        public decimal TaxPerc { get; set; }
        public DateTime _CreatedAt  { get; set; }=DateTime.Now;
    }
}