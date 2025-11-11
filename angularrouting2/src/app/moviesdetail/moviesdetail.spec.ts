import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moviesdetail } from './moviesdetail';

describe('Moviesdetail', () => {
  let component: Moviesdetail;
  let fixture: ComponentFixture<Moviesdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moviesdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moviesdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
