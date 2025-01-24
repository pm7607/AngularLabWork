import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfObjComponent } from './array-of-obj.component';

describe('ArrayOfObjComponent', () => {
  let component: ArrayOfObjComponent;
  let fixture: ComponentFixture<ArrayOfObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOfObjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayOfObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
