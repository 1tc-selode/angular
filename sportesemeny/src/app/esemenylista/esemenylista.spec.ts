import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esemenylista } from './esemenylista';

describe('Esemenylista', () => {
  let component: Esemenylista;
  let fixture: ComponentFixture<Esemenylista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esemenylista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esemenylista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
