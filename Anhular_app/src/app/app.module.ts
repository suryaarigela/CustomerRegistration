import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.router';
import { Customer } from './model/customer';
import { CustomerMock } from './model/customerMock';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { TelephoneMaskDirective } from './telephone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    RegisterComponent,
    EditComponent,
    DeleteComponent,
    TelephoneMaskDirective
    
    
  ],
  imports: [
    BrowserModule,routing,FormsModule,ReactiveFormsModule,HttpModule,MatDialogModule,BrowserAnimationsModule
  ],
  entryComponents:[DeleteComponent],
  providers: [CustomerMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
