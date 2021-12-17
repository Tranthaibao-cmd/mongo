import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';

const routes: Routes = [
  {path:'nhan-vien',component:NhanvienComponent,loadChildren:()=>import('./nhanvien/nhanvien.module').then((m)=>m.NhanvienModule)},
  {
    path: '**',
    redirectTo: 'dau-vao',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
