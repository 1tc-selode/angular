import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todosdetail } from './todosdetail';

describe('Todosdetail', () => {
  let component: Todosdetail;
  let fixture: ComponentFixture<Todosdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todosdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todosdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
