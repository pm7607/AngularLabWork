import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCURDdemoComponent } from './static-curddemo.component';

describe('StaticCURDdemoComponent', () => {
  let component: StaticCURDdemoComponent;
  let fixture: ComponentFixture<StaticCURDdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticCURDdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticCURDdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
