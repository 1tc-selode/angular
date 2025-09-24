import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valamiiii } from './valamiiii';

describe('Valamiiii', () => {
  let component: Valamiiii;
  let fixture: ComponentFixture<Valamiiii>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valamiiii]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valamiiii);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
