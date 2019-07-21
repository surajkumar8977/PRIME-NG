import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
//import { InputTypeFieldsComponentComponent } from './components/input-type-fields-component.component';
//import { DatatableNgComponent } from './components/datatable-ng.component';
import { CustomTableComponent } from './components/custom-table.component';
import { DragDropComponent } from './components/drag-drop.component';
 

export const routes: Routes = [
  { path: '', component: CustomTableComponent },
  //{ path: 'inputTypeFields', component: InputTypeFieldsComponentComponent },
  //{ path: 'datatable', component: DatatableNgComponent },
  { path: 'customtable', component: CustomTableComponent },
  { path: 'dragDroptable', component: DragDropComponent },
  { path: '**', redirectTo: 'datatable', pathMatch: 'full' }
  
];