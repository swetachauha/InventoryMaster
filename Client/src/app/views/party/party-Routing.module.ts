import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartyComponent } from './party.component';

const routes: Routes = [
  {
    path: '',
    component: PartyComponent,
    data: {
      title: `Party `
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class partyRoutingModule {
}
