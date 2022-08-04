using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class sReportDTO
    {
        public DateTime Purchase_Order_Date { get; set; }
        public String ItemName { get; set; }
        public decimal Quantity { get; set; }
        
        public String Customer_Name { get; set; }
        public String unit { get; set; }

    }
}