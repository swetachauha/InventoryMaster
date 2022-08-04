using API.Data;
using API.DTOs;
using API.Entity;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class saleController:BaseApiController
    {
         private readonly DataContext _context;

        public saleController(DataContext context )
        {
            _context = context;
        }

        [HttpGet]
         public async Task<ActionResult<IEnumerable<saleEntity>>> GetAllSales()
        {

            return await  _context.Sale.ToListAsync();
        }
         [HttpPut("{master}")]
        public async Task<ActionResult<int>> AddPurchase(saleDTO SalesMasterDTO)
        {
          var InvoiceNO=0;

            if(SalesMasterDTO.SalesTransaction.AsList().Count==0)
            {
                return BadRequest("Add atleast one item to Sales.");
            }
            else
            {
                     var Sales = new SalesEntity
                {
                    Customer_Name=SalesMasterDTO.Customer_Name,
                    // Address=SalesMasterDTO.Address,
                    // City=SalesMasterDTO.City,
                    // GST_No=SalesMasterDTO.GST_No,
                    // Phone_No=SalesMasterDTO.Phone_No,
                    Sales_Date=SalesMasterDTO.Sales_Date,
                    Purchase_Order_Date=SalesMasterDTO.Purchase_Order_Date,
                    Purchase_Order_no=SalesMasterDTO.Purchase_Order_No,

                    Sales_Invoice_Date=SalesMasterDTO.Sales_Invoice_Date,
                    Builty_No=SalesMasterDTO.Builty_NO,
                    Builty_Date=SalesMasterDTO.Builty_Date,
                    Transport=SalesMasterDTO.Transport,
                    Document_Through=SalesMasterDTO.Document_Through
                    

                    
                };
              
                 _context.Sales.Add(Sales);
                await _context.SaveChangesAsync();
                
            foreach(var item in SalesMasterDTO.SalesTransaction.AsList())
                {
                                    Console.WriteLine($"purchaseQuantity.Quantity ,{item.ItemName}");
                    
                    var purchaseQuantity=await _context.PurchaseTransaction
                .FirstOrDefaultAsync(e => e.ItemName == item.ItemName);
                if(purchaseQuantity.ItemName!=item.ItemName)
                {
                    return NotFound("Item should be purchased before Sale !!");
                }
                                    // Console.WriteLine($"purchaseQuantity.Quantity ,{purchaseQuantity}")
                                    // Console.WriteLine($"ITEMy.Quantity ,{item.Quantity}");

                else if(purchaseQuantity.Quantity<item.Quantity)
                {
                    BadRequest("Sales could not greater than purchase");
                }
                else
                {
              var SalesTran = new SalesTransactionEntity
                {
                    Sales_Invoice_No=Sales.Sales_Invoice_No,
                    ItemName=item.ItemName,
                    Quantity=item.Quantity,
                    Unit=item.Unit,
                    Price=item.Price ,
                    IGST=item.IGST,
                    CGST=item.CGST,
                    SGST=item.SGST,
                    HSN_No=item.HSN_No,
                    Total_Amount=item.Net_Amount,
                };
                 _context.SalesTransaction.Add(SalesTran);
                await _context.SaveChangesAsync();
                InvoiceNO =  SalesTran.Sales_Invoice_No;
                Console.WriteLine($"Invoice ,{InvoiceNO}");
                }

                
             }
         
          

}
                                            
                    return InvoiceNO;
                // return await  _context.SalesTransaction.ToListAsync();
 
            
        }


    }
}