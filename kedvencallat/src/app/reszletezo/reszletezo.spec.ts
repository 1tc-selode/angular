import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reszletezo } from './reszletezo';

describe('Reszletezo', () => {
  let component: Reszletezo;
  let fixture: ComponentFixture<Reszletezo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reszletezo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reszletezo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
