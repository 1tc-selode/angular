import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanglistaComponent } from './ranglista-component';

describe('RanglistaComponent', () => {
  let component: RanglistaComponent;
  let fixture: ComponentFixture<RanglistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RanglistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanglistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
