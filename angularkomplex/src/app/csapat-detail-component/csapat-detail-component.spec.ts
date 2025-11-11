import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapatDetailComponent } from './csapat-detail-component';

describe('CsapatDetailComponent', () => {
  let component: CsapatDetailComponent;
  let fixture: ComponentFixture<CsapatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsapatDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsapatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
