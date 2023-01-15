import { NgModule } from '@angular/core';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ListComponent, ItemComponent],
  imports: [
     ListRoutingModule,
     CommonModule,
     RouterModule
    ]
  ,
  providers: [],
})
export class ListModule {}
