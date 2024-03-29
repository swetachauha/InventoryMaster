import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupComponent } from './group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    data: {
      title: `Group`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class groupRoutingModule {
}
