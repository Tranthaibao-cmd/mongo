import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
  { path: 'config/khachhang', loadChildren: () => import('./config/khachhang/khachhang.module').then(m => m.KhachhangModule) },
  { path: 'config/mathang', loadChildren: () => import('./config/mathang/mathang.module').then(m => m.MathangModule) },
  { path: 'config/donhang', loadChildren: () => import('./config/donhang/donhang.module').then(m => m.DonhangModule) },
  { path: 'config/nhanvien', loadChildren: () => import('./config/nhanvien/nhanvien.module').then(m => m.NhanvienModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
