import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnitComponent } from './unit.component';

const routes: Routes = [
  {
    path: '',
    component: UnitComponent,
    data: {
      title: `Unit`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class unitRoutingModule {
}
