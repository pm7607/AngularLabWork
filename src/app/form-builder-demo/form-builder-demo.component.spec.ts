import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderDemoComponent } from './form-builder-demo.component';

describe('FormBuilderDemoComponent', () => {
  let component: FormBuilderDemoComponent;
  let fixture: ComponentFixture<FormBuilderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuilderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
