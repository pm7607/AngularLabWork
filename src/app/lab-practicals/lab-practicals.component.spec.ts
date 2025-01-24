import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabPracticalsComponent } from './lab-practicals.component';

describe('LabPracticalsComponent', () => {
  let component: LabPracticalsComponent;
  let fixture: ComponentFixture<LabPracticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabPracticalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabPracticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
