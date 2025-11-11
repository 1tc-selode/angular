import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinationsdetail } from './destinationsdetail';

describe('Destinationsdetail', () => {
  let component: Destinationsdetail;
  let fixture: ComponentFixture<Destinationsdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destinationsdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Destinationsdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
