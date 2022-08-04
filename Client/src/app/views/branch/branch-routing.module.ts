import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BranchComponent } from './branch.component';

const routes: Routes = [
  {
    path: '',
    component: BranchComponent,
    data: {
      title: `Branch`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class branchRoutingModule {
}
