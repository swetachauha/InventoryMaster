import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$()
{
  return this._refreshNeeded$;
}


saveFirm(firm:any)
{
  return this.http.post("https://localhost:5001/firm",firm);

}
EditFirm(firm:any, pan_No:any)
{
  console.log("firm",firm);
  console.log("id",pan_No);

  return this.http.put("https://localhost:5001/firm/"+pan_No,firm);

}
  saveUnit(unit:any)
  {
    return this.http.post("https://localhost:5001/unit",unit);
  }
  AllUnits()
  {
    return this.http.get("https://localhost:5001/unit");

  }

  getUnit(unit:any)
  {
    return this.http.get("https://localhost:5001/unit/displayUnit/"+unit)

  }
  EditUnit(unit:any,Unit:any)
  {
      return this.http.put("https://localhost:5001/unit/"+unit,Unit);

  }

  saveTax(tax:any)
  {
    return this.http.post("https://localhost:5001/tax",tax);

  }
  AllTax()
  {
    return this.http.get("https://localhost:5001/tax");

  }
  getTaxByType(taxType:any)
  {
    return this.http.get("https://localhost:5001/tax/displayTax/"+taxType)

  }
  EditTax(taxType:any,tax:any)
  {
      return this.http.put("https://localhost:5001/tax/"+taxType,tax);

  }
  saveBranch(branch:any)
  {
    return this.http.post("https://localhost:5001/branch",branch);

  }
  AllBranch()
  {
    return this.http.get("https://localhost:5001/branch");

  }
  saveGroup(group:any)
  {
    return this.http.post("https://localhost:5001/group",group);

  }
  AllGroup()
  {
    return this.http.get("https://localhost:5001/group");

  }
  getGroup(groupCategory:any)
  {
    return this.http.get("https://localhost:5001/group/displayGroup/"+groupCategory)
  }
  getUniqueGroup()
  {
    return this.http.get("https://localhost:5001/group/unique")
  }
  getGroupByCategory(groupCategory:any)
  {
    return this.http.get("https://localhost:5001/group/category/"+groupCategory);

  }
  EditGroup(groupCategory:any,group:any)
  {
    
      return this.http.put("https://localhost:5001/group/edit/"+groupCategory,group);

  }
  deleteGroup(groupCategory:any,group:any)
  {
    
    return this.http.put("https://localhost:5001/group/delete/"+groupCategory,group);
    
  }
  saveBank(bank:any):Observable<any>
  {
    return this.http.post("https://localhost:5001/bank",bank);
    // .pipe(tap(()=>{
    // this._refreshNeeded$.next();
    // }))

  }
  AllBank()
  {
    return this.http.get("https://localhost:5001/bank");

  }
  getBankById(IFSc_code:any)
  {
    return this.http.get("https://localhost:5001/bank/displayBankByIFSC/"+IFSc_code)
  }
  EditBank(IFSc_code:any,bank:any)
  {
      return this.http.put("https://localhost:5001/bank/"+IFSc_code,bank);

  }
  getBranchById(branchId:any)
  {
    return this.http.get("https://localhost:5001/branch/displaybyBranchId/"+branchId)

  }
  EditBranch(branchId:any,branch:any)
  {
      return this.http.put("https://localhost:5001/branch/"+branchId,branch);
      // return this.http.patch("https://localhost:5001/bank/"+IFSc_code,bank);


  }

  saveItem(item:any)
  {
    return this.http.post("https://localhost:5001/item",item);
  }
  AllItem()
  {
    return this.http.get("https://localhost:5001/item/displayItems");

  }
  getItemByItemName(itemName:any)
  {
    return this.http.get("https://localhost:5001/item/displayItems/"+itemName);

  }
  EditItem(itemId:any,item:any)
  {
    console.log("itemEntity",item);
      return this.http.put("https://localhost:5001/item/"+itemId,item);

  }
 
  UploadImage(image:any,pan_No:any)
  {
    return this.http.put("https://localhost:5001/uploadImage/"+pan_No,image,{responseType: 'text'});

  }
 
  Upload(image:any)
  {
    return this.http.post("https://localhost:5001/firm",image);

  }
  saveparty(party:any)
  {
    return this.http.post("https://localhost:5001/party",party);

  }
  EditParty(itemId:any,item:any)
  {
    return this.http.put("https://localhost:5001/party/"+itemId,item);

  }
  
  allParty()
  {
    return this.http.get("https://localhost:5001/party");

  }
  getPartyByPhoneAndName(partyName:any,phone_No:any)
  {
    return this.http.get("https://localhost:5001/party/displayParty/"+partyName+"/"+phone_No);


  }
  getPartyByGST(gst:any)
  {
    return this.http.get("https://localhost:5001/party/getPartyByGST/"+gst);


  }
  savePurchase(purchase:any)
  {
    return this.http.put("https://localhost:5001/purchase/master",purchase);

  }
  AllPurchaseItem()
  {
    return this.http.get("https://localhost:5001/purchase");

  }
  getFirmGST(GST_No:any)
  {
    return this.http.get("https://localhost:5001/firm/"+GST_No);

  }
  getFirm()
  {
    return this.http.get("https://localhost:5001/firm");

  }
  saveTransport(transport:any)
  {
    return this.http.post("https://localhost:5001/transport",transport);

  }
  AllTransport()
  {
    return this.http.get("https://localhost:5001/transport");

  }
  getTransporterByGSTNo(GST_No:any)
  {
    return this.http.get("https://localhost:5001/transport/getTransporterByGST/"+GST_No);

  }
  EditTransport(groupCategory:any,group:any)
  {
    
      return this.http.put("https://localhost:5001/transport/"+groupCategory,group);

  }
  saveSale(sale:any)
  {   
     return this.http.put("https://localhost:5001/sale/master",sale);


  }
  searchPurchaseReport(dateStart:any,dateEnd:any,itemName:any)
  {
    return this.http.get("https://localhost:5001/purchaseReport/"+dateStart+"/"+dateEnd+"/"+itemName);

  }
  searchSaleReport(dateStart:any,dateEnd:any,itemName:any)
  {
    return this.http.get("https://localhost:5001/saleReport/"+dateStart+"/"+dateEnd+"/"+itemName);

  }
  // savePurchaseTransaction(purchase:any)
  // {
  //   return this.http.post("https://localhost:5001/purchase/transaction/",purchase);

  // }
  // addImage(image: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ "Content-Type": "application/json" })
  //   };
  
  //   // Call the ASP.NET 2.1 MVC Web API.
  //   return this.http
  //     .post<any>(this.url + "/AddImage/", image, httpOptions);
      
  // }
}
