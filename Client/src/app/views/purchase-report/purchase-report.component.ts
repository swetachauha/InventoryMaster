import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';

@Component({
  selector: 'app-purchase-report',
  templateUrl: './purchase-report.component.html',
  styleUrls: ['./purchase-report.component.scss']
})
export class PurchaseReportComponent implements OnInit {

  purchaseReport:any=[];
  getItemList:any=[];
  dataTable:any;
  getPurchaseReportList:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined=false;
  noData:string | undefined;
  minDate:any;
  showTable:boolean=false;

  

  constructor(private service: InventoryServiceService) { }


  ngOnInit(): void {
    this.getItems();
    this.pastDateDisable();
  }
  OnTableDataChange(event:any)
  {
    this.page = event;
 
  }
 
  OnTableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
  }
  pastDateDisable()
  {
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any=date.getMonth()+1;
    var year:any=date.getFullYear();

    if(todayDate<10)
    {
      todayDate='0'+todayDate;
    }
    if(month<10)
    {
      month='0'+month;
    }
    this.minDate=year+"-"+month+"-"+todayDate;
    console.log("today",this.minDate);
  }

  searchPurchaseReport()
  {
    
    // const start =this.datePipe.transform(this.purchaseReport.dateStart,'yyyy-MM-ddThh:mm:ss');
    // this.purchaseReport.dateStart=start;

    // const end =this.datePipe.transform(this.purchaseReport.dateEnd,'yyyy-MM-ddThh:mm:ss');
    // this.purchaseReport.dateEnd=end;


    // return this.service.searchSalesReport(start,end,this.purchaseReport.itemName).subscribe(res=>{
    //   console.log("salesreportres",res);
    //   this.getPurchaseReportList=res;
    //   this.showTable=true;

    //   if(this.getPurchaseReportList.length==0)
    //   {
    //    this.noData="No Data Found";
    //    this.isData=false;
    //    console.log("byugunh",this.getItems);
    //   }
    //   else{
    //     this.isData=true;
    //   }

    //   console.log("salesreportres",this.getPurchaseReportList);

    // })

  }
  getItems(){
   return this.service.AllItem().subscribe(item=>{
      console.log(item);
      this.getItemList=item;
      console.log("itemlist",this.getItemList);
   }
    );
    }
}
