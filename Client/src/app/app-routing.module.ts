import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { UnitComponent } from './views/unit/unit.component';
import { TaxSlabComponent } from './views/tax-slab/tax-slab.component';
import { FirmComponent } from './views/firm/firm.component';
import { BankComponent } from './views/bank/bank.component';
import { BranchComponent } from './views/branch/branch.component';
import { GroupComponent } from './views/group/group.component';
import { ItemsComponent } from './views/items/items.component';
import { StockComponent } from './views/stock/stock.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { DashboardChartsData } from './views/dashboard/dashboard-charts-data';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';
import { PartyComponent } from './views/party/party.component';
import { PurchaseComponent } from './views/purchase/purchase.component';
import { SalesComponent } from './views/sales/sales.component';
import { TransportComponent } from './views/transport/transport.component';
import { SalesReportComponent } from './views/sales-report/sales-report.component';
import { PurchaseReportComponent} from './views/purchase-report/purchase-report.component';
import { AuthGuardGuard } from './Security/auth-guard.guard';
import { firmRoutingModule} from './views/firm/firm-routing.module';
import { groupRoutingModule} from './views/group/group-routing.module';
import { itemRoutingModule} from './views/items/item-routing.module';
import { partyRoutingModule} from './views/party/party-routing.module';
import { purchaseRoutingModule} from './views/purchase/purchase-routing.module';
import { saleRoutingModule} from './views/sales/sales-routing.module';
// import { taxRoutingModule} from './views/tax-Slab/tax-routing.module';
import { transportRoutingModule} from './views/transport/transport-routing.module';
import { bankRoutingModule} from './views/bank/bank-routing.module';
import { branchRoutingModule} from './views/branch/branch-routing.module';
import { unitRoutingModule} from './views/unit/unit-routing.module';
import { stockRoutingModule} from './views/stock/stock-routing.module';
import { ImageLComponent } from './views/image-l/image-l.component';





const routes: Routes = [
  {
    path: '',
    component:MainPageComponent,
    data: {
      title: 'Home',
      path:'', 
    },
  },
  {
    path: '',
    component:DefaultLayoutComponent,
    data: {
      title: 'Home',
      path:'di',
      
    },
    children: [
      
      {
        path: 'dashboard',
        // component:DashboardComponent,
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate:[AuthGuardGuard]

      },
      {
        path: 'firmMaster',
        // component: FirmComponent,
        loadChildren: () =>
        import('./views/firm/firm-routing.module').then((m) => m.firmRoutingModule),
        canActivate:[AuthGuardGuard]
       
      },
      {
        path: 'bankMaster',
        // component: BankComponent,
        loadChildren: () =>
        import('./views/bank/bank-routing.module').then((m) => m.bankRoutingModule),
        canActivate:[AuthGuardGuard]
        
      },
      {
        path: 'branchMaster',
        loadChildren: () =>
        import('./views/branch/branch-routing.module').then((m) => m.branchRoutingModule),        canActivate:[AuthGuardGuard]
      },
      {
        path: 'unit',
        loadChildren: () =>
        import('./views/unit/unit-routing.module').then((m) => m.unitRoutingModule),    
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'taxMaster',
        component:TaxSlabComponent,
        // loadChildren: () =>
        // import('./views/tax-Slab/tax-routing.module').then((m) => m.taxRoutingModule),
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'groupMaster',
        loadChildren: () =>
        import('./views/group/group-routing.module').then((m) => m.groupRoutingModule),
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'itemMaster',
        loadChildren: () =>
        import('./views/items/item-routing.module').then((m) => m.itemRoutingModule),    
            canActivate:[AuthGuardGuard]
      },
      {
        path: 'stockMaster',
        loadChildren: () =>
        import('./views/stock/stock-routing.module').then((m) => m.stockRoutingModule),            canActivate:[AuthGuardGuard]
      },
      {
        path: 'partyMaster',
        loadChildren: () =>
        import('./views/party/party-routing.module').then((m) => m.partyRoutingModule),    
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'purchase',
        loadChildren: () =>
        import('./views/purchase/purchase-routing.module').then((m) => m.purchaseRoutingModule),  
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'sales',
        loadChildren: () =>
        import('./views/sales/sales-routing.module').then((m) => m.saleRoutingModule),                
        canActivate:[AuthGuardGuard]
      },
      {
        path: 'transportMaster',
        loadChildren: () =>
        import('./views/transport/transport-routing.module').then((m) => m.transportRoutingModule),                    canActivate:[AuthGuardGuard]
      },
      {
        path: 'purchaseReport',
        component: PurchaseReportComponent ,
                canActivate:[AuthGuardGuard]
      },
      {
        path: 'saleReport',
        component: SalesReportComponent ,
                canActivate:[AuthGuardGuard]
      },
      
     
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
      onSameUrlNavigation:'reload'
    },      
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DefaultLayoutComponent } from './containers';



// const routes: Routes = [
//   {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//       },
//       {
//         path: '',
//         component: DefaultLayoutComponent,
//         data: {
//           title: 'Home'
//         },
//         children: [
//           {
//             path: 'dashboard',
//             loadChildren: () =>
//               import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
//           },
  
    
//       {
//         path: 'buttons',
//         component: ButtonsComponent,
//         data: {
//           title: 'Buttons'
//         }
//       },
//       {
//         path: 'button-groups',
//         component: ButtonGroupsComponent,
//         data: {
//           title: 'Button groups'
//         }
//       },
//       {
//         path: 'dropdowns',
//         component: DropdownsComponent,
//         data: {
//           title: 'Dropdowns'
//         }
//       },
//     ]
//   }
// ];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class ButtonsRoutingModule {
// }

