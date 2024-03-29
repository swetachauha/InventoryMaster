import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';




import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { TaxSlabComponent } from './views/tax-slab/tax-slab.component';
import { UnitComponent } from './views/unit/unit.component';
import { ItemsComponent } from './views/items/items.component';
import { GroupComponent } from './views/group/group.component';
import { FirmComponent } from './views/firm/firm.component';
import { BranchComponent } from './views/branch/branch.component';
import { BankComponent } from './views/bank/bank.component';
import { StockComponent } from './views/stock/stock.component';
import { BranchTableComponent } from './views/branch-table/branch-table.component';
import { DataTablesModule } from 'angular-datatables';
import { TaxTableComponent } from './views/tax-table/tax-table.component';
import { UnitTableComponent } from './views/unit-table/unit-table.component';
import { GroupTableComponent } from './views/group-table/group-table.component';
import { ItemTableComponent } from './views/item-table/item-table.component';
import { BankTableComponent } from './views/bank-table/bank-table.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { PartyComponent } from './views/party/party.component';
import { PartyTableComponent } from './views/party-table/party-table.component';
import { PurchaseComponent } from './views/purchase/purchase.component';
import { SalesComponent } from './views/sales/sales.component';
import { TransportComponent } from './views/transport/transport.component';
import { TransportTableComponent } from './views/transport-table/transport-table.component';
import { SalesReportComponent } from './views/sales-report/sales-report.component';
import { PurchaseReportComponent } from './views/purchase-report/purchase-report.component';
import { ImageLComponent } from './views/image-l/image-l.component';
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [AppComponent, ...APP_CONTAINERS, TaxSlabComponent, UnitComponent, ItemsComponent, GroupComponent, FirmComponent, BranchComponent, BankComponent, StockComponent, BranchTableComponent, TaxTableComponent, UnitTableComponent, GroupTableComponent, ItemTableComponent, BankTableComponent, MainPageComponent, PartyComponent, PartyTableComponent, PurchaseComponent, SalesComponent, TransportComponent, TransportTableComponent, SalesReportComponent, PurchaseReportComponent, ImageLComponent, SearchFilterPipe, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    DataTablesModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    DatePipe

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
