import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LinkedinService } from './linkedin.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.router';
import { RouterModule } from '@angular/router';
import { SafemodeComponent } from './safemode/safemode.component';
import { SafeHeaderComponent } from './safe-header/safe-header.component';
import { SafeLeftPaneComponent } from './safe-left-pane/safe-left-pane.component';
import { SafeRightPaneComponent } from './safe-right-pane/safe-right-pane.component';
import { SafeCenterPaneComponent } from './safe-center-pane/safe-center-pane.component';
import { ProfileComponent } from './profile/profile.component';
import { NetworkComponent } from './network/network.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SafemodeComponent,
    SafeHeaderComponent,
    SafeLeftPaneComponent,
    SafeRightPaneComponent,
    SafeCenterPaneComponent,
    ProfileComponent,
    NetworkComponent
  ],
  imports: [
    routing,BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
  ],
  bootstrap: [AppComponent],
  providers:[LinkedinService]
})
export class AppModule { }
