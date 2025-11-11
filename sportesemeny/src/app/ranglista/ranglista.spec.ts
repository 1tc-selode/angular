import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranglista } from './ranglista';

describe('Ranglista', () => {
  let component: Ranglista;
  let fixture: ComponentFixture<Ranglista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ranglista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ranglista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
