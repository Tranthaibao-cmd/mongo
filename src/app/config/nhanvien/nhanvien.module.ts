import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NhanvienRoutingModule } from './nhanvien-routing.module';
import { NhanvienComponent } from './nhanvien.component';


@NgModule({
  declarations: [NhanvienComponent],
  imports: [
    CommonModule,
    NhanvienRoutingModule
  ]
})
export class NhanvienModule { }
