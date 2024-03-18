// form-controls.component.ts
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './forms-controls.component.html',
  styleUrls: ['./forms-controls.component.css'],
})
export class FormControlsComponent {
  @Input() formGroup: FormGroup | null = null;
  @Input() submitCallback: (() => void) | null = null;

  // ... définissez les validateurs et contrôles ici ...
}
