import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FirmComponent } from './firm.component';
import { ItemsComponent} from './items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    data: {
      title: `Item`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemRoutingModule {
}
