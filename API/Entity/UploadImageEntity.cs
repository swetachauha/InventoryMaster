using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entity
{
    public class UploadImageEntity
    {
        [Key]
        public int id { get; set; }
        public Byte[] image { get; set; }
    }
}