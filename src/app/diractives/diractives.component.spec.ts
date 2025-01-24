import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiractivesComponent } from './diractives.component';

describe('DiractivesComponent', () => {
  let component: DiractivesComponent;
  let fixture: ComponentFixture<DiractivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiractivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiractivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
