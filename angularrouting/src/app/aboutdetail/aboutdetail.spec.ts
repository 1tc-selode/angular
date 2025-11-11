import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutdetail } from './aboutdetail';

describe('Aboutdetail', () => {
  let component: Aboutdetail;
  let fixture: ComponentFixture<Aboutdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
