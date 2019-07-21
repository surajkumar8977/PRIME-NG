import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './components/app.component';
import 'rxjs/add/operator/toPromise';
import {routes } from './app.routing';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';
//import {InputTextModule,ButtonModule,DialogModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
//import {OrderListModule} from 'primeng/orderlist';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TableModule} from 'primeng/table';
import {GMapModule} from 'primeng/gmap';
import {MessagesModule} from 'primeng/messages';
import {CheckboxModule} from 'primeng/checkbox';
import {MessageModule} from 'primeng/message';
//import {DragDropModule} from 'primeng/primeng';
//import {DropdownModule} from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { CustomTableComponent } from './components/custom-table.component';
import { DragDropComponent } from './components/drag-drop.component';



@NgModule({
	imports: [
    BrowserModule, FormsModule, HttpModule, AngularFontAwesomeModule, ToastModule, CheckboxModule, MessagesModule, MessageModule, GMapModule, DialogModule, ButtonModule, TableModule, BrowserAnimationsModule, RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  declarations: [
    AppComponent,
    CustomTableComponent,
    DragDropComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
