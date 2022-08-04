import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransportComponent } from './transport.component';

const routes: Routes = [
  {
    path: '',
    component: TransportComponent,
    data: {
      title: `Transport`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class transportRoutingModule {
}
