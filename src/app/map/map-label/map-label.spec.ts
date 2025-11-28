import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLabel } from './map-label';

describe('MapLabel', () => {
  let component: MapLabel;
  let fixture: ComponentFixture<MapLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
