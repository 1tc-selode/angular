import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diak } from './diak';

describe('Diak', () => {
  let component: Diak;
  let fixture: ComponentFixture<Diak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diak);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
