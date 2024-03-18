// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalInfo, AddressInfo, JobInfo } from './models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  personalInfo$ = new BehaviorSubject<PersonalInfo | null>(null);
  addressInfo$ = new BehaviorSubject<AddressInfo | null>(null);
  jobInfo$ = new BehaviorSubject<JobInfo | null>(null);
}
