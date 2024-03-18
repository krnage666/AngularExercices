import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsControlsComponent } from './forms-controls.component';

describe('FormsControlsComponent', () => {
  let component: FormsControlsComponent;
  let fixture: ComponentFixture<FormsControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsControlsComponent]
    });
    fixture = TestBed.createComponent(FormsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
