import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirmComponent } from './firm.component';

const routes: Routes = [
  {
    path: '',
    component: FirmComponent,
    data: {
      title: `Firm`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class firmRoutingModule {
}
