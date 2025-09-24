import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gyerek } from './gyerek';

describe('Gyerek', () => {
  let component: Gyerek;
  let fixture: ComponentFixture<Gyerek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gyerek]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gyerek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
