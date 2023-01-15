import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship.component';

const routes: Routes = [
  {
    path:'',
    component:ShipComponent,
    data: {reuse: true},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipRoutingModule { }
