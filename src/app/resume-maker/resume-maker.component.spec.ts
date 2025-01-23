import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMakerComponent } from './resume-maker.component';

describe('ResumeMakerComponent', () => {
  let component: ResumeMakerComponent;
  let fixture: ComponentFixture<ResumeMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
