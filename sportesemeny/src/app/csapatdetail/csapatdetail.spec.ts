import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csapatdetail } from './csapatdetail';

describe('Csapatdetail', () => {
  let component: Csapatdetail;
  let fixture: ComponentFixture<Csapatdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csapatdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csapatdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
