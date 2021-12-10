import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhanvienComponent } from './nhanvien.component';

const routes: Routes = [{ path: '', component: NhanvienComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhanvienRoutingModule { }
