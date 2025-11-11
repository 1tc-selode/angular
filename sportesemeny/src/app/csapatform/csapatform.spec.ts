import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csapatform } from './csapatform';

describe('Csapatform', () => {
  let component: Csapatform;
  let fixture: ComponentFixture<Csapatform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csapatform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csapatform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
