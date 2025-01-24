import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenFormComponent } from './temp-driven-form.component';

describe('TempDrivenFormComponent', () => {
  let component: TempDrivenFormComponent;
  let fixture: ComponentFixture<TempDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempDrivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
