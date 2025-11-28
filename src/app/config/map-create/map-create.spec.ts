import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCreate } from './map-create';

describe('MapCreate', () => {
  let component: MapCreate;
  let fixture: ComponentFixture<MapCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
