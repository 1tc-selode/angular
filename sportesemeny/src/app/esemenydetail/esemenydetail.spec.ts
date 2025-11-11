import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esemenydetail } from './esemenydetail';

describe('Esemenydetail', () => {
  let component: Esemenydetail;
  let fixture: ComponentFixture<Esemenydetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esemenydetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esemenydetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
