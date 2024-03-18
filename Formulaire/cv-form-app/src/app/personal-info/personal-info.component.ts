// personal-info.component.ts
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})

// personal-info.model.ts
export interface PersonalInfo {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  pseudo: string;
}
export class PersonalInfoComponent {
  constructor(private dataService: DataService) {}

  submitPersonalInfo(personalInfo: PersonalInfo) {
    this.dataService.personalInfo$.next(personalInfo);
  }
}
