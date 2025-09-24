import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gyermek2 } from './gyermek2';

describe('Gyermek2', () => {
  let component: Gyermek2;
  let fixture: ComponentFixture<Gyermek2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gyermek2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gyermek2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
