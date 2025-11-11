import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esemenysportag } from './esemenysportag';

describe('Esemenysportag', () => {
  let component: Esemenysportag;
  let fixture: ComponentFixture<Esemenysportag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esemenysportag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esemenysportag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
