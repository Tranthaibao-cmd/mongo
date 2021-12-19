import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonhangComponent } from './donhang/donhang.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { MathangComponent } from './mathang/mathang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';

const routes: Routes = [
  {path:'nhan-vien',component:NhanvienComponent,loadChildren:()=>import('./nhanvien/nhanvien.module').then((m)=>m.NhanvienModule)},
  {
    path:'**',
    redirectTo: 'config/khach-hang',
    pathMatch: 'full',
  },
  {
    path: 'config/khach-hang',
    component: KhachhangComponent,
    loadChildren:()=>import('./khachhang/khachhang.module').then((m)=>m.KhachhangModule)
  },
  { path: 'config/mathang', component:MathangComponent,loadChildren: () => import('./mathang/mathang.module').then(m => m.MathangModule) },
  { path: 'config/donhang',component:DonhangComponent, loadChildren: () => import('./donhang/donhang.module').then(m => m.DonhangModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
