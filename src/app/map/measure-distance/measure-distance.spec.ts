import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureDistance } from './measure-distance';

describe('MeasureDistance', () => {
  let component: MeasureDistance;
  let fixture: ComponentFixture<MeasureDistance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureDistance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasureDistance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
