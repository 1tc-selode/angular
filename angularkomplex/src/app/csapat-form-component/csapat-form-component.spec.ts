import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapatFormComponent } from './csapat-form-component';

describe('CsapatFormComponent', () => {
  let component: CsapatFormComponent;
  let fixture: ComponentFixture<CsapatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsapatFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsapatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
