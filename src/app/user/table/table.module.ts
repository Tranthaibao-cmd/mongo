import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  SearchService,
  ToolbarService,
  EditService,
  ForeignKeyService,
} from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AlterModule } from 'src/app/alter/alter.module';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table.component';
@NgModule({
declarations:[TableComponent],
imports:[CommonModule, GridModule, DialogModule,AlterModule, HttpClientModule ],
providers:[
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    EditService,
    ForeignKeyService,],
exports:[TableComponent],
})
export class TableUserModule{}