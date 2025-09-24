import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gyermek } from './gyermek';

describe('Gyermek', () => {
  let component: Gyermek;
  let fixture: ComponentFixture<Gyermek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gyermek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gyermek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
