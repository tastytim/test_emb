import { NgModule } from '@angular/core';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { CheckboxlistComponent } from './components/checkboxlist/checkboxlist.component';
import { RadiolistComponent } from './components/radiolist/radiolist.component';


@NgModule({
  declarations: [ListComponent, ItemComponent, InputComponent, CheckboxlistComponent, RadiolistComponent],
  imports: [
     ListRoutingModule,
     CommonModule,
     RouterModule
    ]
  ,
  providers: [],
})
export class ListModule {}
