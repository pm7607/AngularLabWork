import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormsComponent } from './student-forms.component';

describe('StudentFormsComponent', () => {
  let component: StudentFormsComponent;
  let fixture: ComponentFixture<StudentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
