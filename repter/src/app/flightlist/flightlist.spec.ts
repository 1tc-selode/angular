import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flightlist } from './flightlist';

describe('Flightlist', () => {
  let component: Flightlist;
  let fixture: ComponentFixture<Flightlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flightlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flightlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
