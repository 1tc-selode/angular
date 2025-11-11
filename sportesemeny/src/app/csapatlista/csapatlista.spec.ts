import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csapatlista } from './csapatlista';

describe('Csapatlista', () => {
  let component: Csapatlista;
  let fixture: ComponentFixture<Csapatlista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Csapatlista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Csapatlista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
