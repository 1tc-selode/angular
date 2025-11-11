import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menudetails } from './menudetails';

describe('Menudetails', () => {
  let component: Menudetails;
  let fixture: ComponentFixture<Menudetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menudetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menudetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
