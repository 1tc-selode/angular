import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Szulo } from './szulo';

describe('Szulo', () => {
  let component: Szulo;
  let fixture: ComponentFixture<Szulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Szulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Szulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
