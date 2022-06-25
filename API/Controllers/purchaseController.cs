using API.Data;
using API.DTOs;
using API.Entity;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class purchaseController:BaseApiController
    {
         private readonly DataContext _context;

        public purchaseController(DataContext context )
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseTransactionEntity>>> GetAllPurchases()
        {

            return await  _context.PurchaseTransaction.ToListAsync();
        }

        [HttpGet("total")]
public async Task<IEnumerable<purchaseTotalDTO>> GetCompanies()
{
      
    // var query=$"Declare @total decimal Execute purchaseTotalProcedure @total output;";
    var query="SELECT itemName, SUM(quantity)) AS TOTALAMOUNT FROM Purchase GROUP BY itemName ;";
    using (var connection = _context.CreateConnection())
    {
        var purchaseList = await connection.QueryAsync<purchaseTotalDTO>(query);
      
          
            return purchaseList.ToList();
    }
}

        [HttpPost("{master}")]
        public async Task<ActionResult<IEnumerable<PurchaseTransactionEntity>>> AddPurchase(purchaseMasterDTO purchaseMasterDTO)
        {
          Console.WriteLine($"INVENTORY INVENTORY ,{purchaseMasterDTO.Vendor_Name}");

            if(purchaseMasterDTO.PurchaseTransaction.AsList().Count==0)
            {
                return BadRequest("Add atleast one item to purchase.");
            }
            else
            {
                     var purchase = new PurchaseMasterEntity
                {
                    Vendor_Name=purchaseMasterDTO.Vendor_Name,
                    Address=purchaseMasterDTO.Address,
                    City=purchaseMasterDTO.City,
                    Phone_No=purchaseMasterDTO.Phone_No,
                    purchaseDate=purchaseMasterDTO.purchaseDate,
                    Purchase_Order_No=purchaseMasterDTO.Purchase_Order_No,
                    Purchase_Order_Date=purchaseMasterDTO.Purchase_Order_Date,
                    Purchase_Invoice_NO=purchaseMasterDTO.Purchase_Invoice_NO,
                    Purchase_Invoice_Date=purchaseMasterDTO.Purchase_Invoice_Date,
                    

                    
                };
              
                 _context.PurchaseMaster.Add(purchase);
                await _context.SaveChangesAsync();
                
            foreach(var item in purchaseMasterDTO.PurchaseTransaction.AsList())
                {
                 var purchaseTran = new PurchaseTransactionEntity
                {
                    purchaseID=purchase.purchaseID,
                    ItemName=item.ItemName,
                    Quantity=item.Quantity,
                    Unit=item.Unit,
                    Price=item.Price,
                    Tax=item.Tax,
                    HSN_No=item.HSN_No,
                    Total_Amount=item.Total_Amount,
                };
                 _context.PurchaseTransaction.Add(purchaseTran);
                await _context.SaveChangesAsync();
            }
         
          

}
               
               
                return await  _context.PurchaseTransaction.ToListAsync();
 
            
        }

    //       [HttpPost("{transaction}")]
    //     public async Task<ActionResult<IEnumerable<PurchaseTransactionEntity>>> AddPurchaseTransaction(PurchaseTransactionDTO PurchaseTransactionDTO)
    //     {
          
    //         // var itemUnit=await _context.PurchaseMaster.FirstOrDefaultAsync(x =>x.itemName==PurchaseTransactionDTO.itemName);
           
    //                var purchaseTran = new PurchaseTransactionEntity
    //             {
    //                 purchaseID=PurchaseTransactionDTO.purchaseID,
    //                 ItemName=PurchaseTransactionDTO.ItemName,
    //                 Quantity=PurchaseTransactionDTO.Quantity,
    //                 Unit=PurchaseTransactionDTO.Unit,
    //                 Price=PurchaseTransactionDTO.Price,
    //                 Tax=PurchaseTransactionDTO.Tax,
    //                 Total_Amount=PurchaseTransactionDTO.Total_Amount,
                    
                    
    //             };
    //              _context.PurchaseTransaction.Add(purchaseTran);
    //             await _context.SaveChangesAsync();
            
         
               
               
    //             return await  _context.PurchaseTransaction.ToListAsync();
 
            
        

    // }


    }

}