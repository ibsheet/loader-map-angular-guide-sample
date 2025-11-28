import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileMap } from './tile-map';

describe('TileMap', () => {
  let component: TileMap;
  let fixture: ComponentFixture<TileMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
