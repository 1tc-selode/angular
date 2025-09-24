import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photosdetail } from './photosdetail';

describe('Photosdetail', () => {
  let component: Photosdetail;
  let fixture: ComponentFixture<Photosdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photosdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Photosdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
