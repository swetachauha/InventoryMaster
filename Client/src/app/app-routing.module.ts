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


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },

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
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'firmMaster',
        component: FirmComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'bankMaster',
        component: BankComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'branchMaster',
        component: BranchComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'unit',
        component: UnitComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'taxMaster',
        component: TaxSlabComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'groupMaster',
        component: GroupComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'itemMaster',
        component: ItemsComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'stockMaster',
        component: StockComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'partyMaster',
        component: PartyComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
      },
      {
        path: 'purchase',
        component: PurchaseComponent,
        // loadChildren: () =>
        //   import('./views/unit/unit.component').then((m) => m.UnitComponent)
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
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
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

