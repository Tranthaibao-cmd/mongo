import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonhangRoutingModule } from './donhang-routing.module';
import { DonhangComponent } from './donhang.component';


@NgModule({
  declarations: [DonhangComponent],
  imports: [
    CommonModule,
    DonhangRoutingModule
  ]
})
export class DonhangModule { }
