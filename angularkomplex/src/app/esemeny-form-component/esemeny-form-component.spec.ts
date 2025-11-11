import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenyFormComponent } from './esemeny-form-component';

describe('EsemenyFormComponent', () => {
  let component: EsemenyFormComponent;
  let fixture: ComponentFixture<EsemenyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsemenyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsemenyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
