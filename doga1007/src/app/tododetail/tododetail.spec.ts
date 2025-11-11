import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tododetail } from './tododetail';

describe('Tododetail', () => {
  let component: Tododetail;
  let fixture: ComponentFixture<Tododetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tododetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tododetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
