import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSymbol } from './point-symbol';

describe('PointSymbol', () => {
  let component: PointSymbol;
  let fixture: ComponentFixture<PointSymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointSymbol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointSymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
