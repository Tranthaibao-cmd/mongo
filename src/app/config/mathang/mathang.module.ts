import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathangRoutingModule } from './mathang-routing.module';
import { MathangComponent } from './mathang.component';


@NgModule({
  declarations: [MathangComponent],
  imports: [
    CommonModule,
    MathangRoutingModule
  ]
})
export class MathangModule { }
