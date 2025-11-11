import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esemenyform } from './esemenyform';

describe('Esemenyform', () => {
  let component: Esemenyform;
  let fixture: ComponentFixture<Esemenyform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esemenyform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esemenyform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
