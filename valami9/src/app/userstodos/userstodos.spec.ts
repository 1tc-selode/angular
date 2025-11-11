import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userstodos } from './userstodos';

describe('Userstodos', () => {
  let component: Userstodos;
  let fixture: ComponentFixture<Userstodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userstodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userstodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
