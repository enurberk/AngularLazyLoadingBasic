import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BilletComponent } from './billet.component';
import { BilletRoutingModule } from './billet-routing.module';

@NgModule({
  declarations: [
    BilletComponent,
  ],
  imports: [
    CommonModule,
    BilletRoutingModule,
  ]
})
export class BilletModule { }
