import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjdonsagokComponent } from './ujdonsagok-component';

describe('UjdonsagokComponent', () => {
  let component: UjdonsagokComponent;
  let fixture: ComponentFixture<UjdonsagokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UjdonsagokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjdonsagokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
