import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalPageComponent } from './practical-page.component';

describe('PracticalPageComponent', () => {
  let component: PracticalPageComponent;
  let fixture: ComponentFixture<PracticalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
