import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flightdetail } from './flightdetail';

describe('Flightdetail', () => {
  let component: Flightdetail;
  let fixture: ComponentFixture<Flightdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flightdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flightdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
