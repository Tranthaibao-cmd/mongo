import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathangComponent } from './mathang.component';

const routes: Routes = [{ path: '', component: MathangComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathangRoutingModule { }
