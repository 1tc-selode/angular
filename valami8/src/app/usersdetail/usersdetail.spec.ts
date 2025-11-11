import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersdetail } from './usersdetail';

describe('Usersdetail', () => {
  let component: Usersdetail;
  let fixture: ComponentFixture<Usersdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
