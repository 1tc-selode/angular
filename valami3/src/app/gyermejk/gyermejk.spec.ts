import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gyermejk } from './gyermejk';

describe('Gyermejk', () => {
  let component: Gyermejk;
  let fixture: ComponentFixture<Gyermejk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gyermejk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gyermejk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
