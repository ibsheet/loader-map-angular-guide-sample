import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drilldown } from './drilldown';

describe('Drilldown', () => {
  let component: Drilldown;
  let fixture: ComponentFixture<Drilldown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drilldown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drilldown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
