import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonhangComponent } from './donhang.component';

const routes: Routes = [{ path: '', component: DonhangComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonhangRoutingModule { }
