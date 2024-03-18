import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { FormControlsComponent } from './forms-controls/forms-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressInfoComponent,
    JobInfoComponent,
    FormControlsComponent,
    PersonalInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
