import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { JobInfoComponent } from './job-info/job-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/personal-info', pathMatch: 'full' },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'address-info', component: AddressInfoComponent },
  { path: 'job-info', component: JobInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
