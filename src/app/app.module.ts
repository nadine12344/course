import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { RouterModule } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { ReturnedComponent } from './returned/returned.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogePhotoComponent } from './dialoge-photo/dialoge-photo.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TemplatesComponent,
    ReturnedComponent,
    DialogePhotoComponent
  
  ],
  entryComponents:[DialogePhotoComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule, WavesModule,
    RouterModule.forRoot([
      { path: 'table', component: TableComponent },
      { path: 'templates', component:TemplatesComponent },
      { path: 'returned', component: ReturnedComponent },

      { path: '', redirectTo:'table', pathMatch: 'full' },
      { path: '**', redirectTo:'table', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
    MatDialogModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
