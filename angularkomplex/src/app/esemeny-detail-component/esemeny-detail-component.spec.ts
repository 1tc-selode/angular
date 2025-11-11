import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenyDetailComponent } from './esemeny-detail-component';

describe('EsemenyDetailComponent', () => {
  let component: EsemenyDetailComponent;
  let fixture: ComponentFixture<EsemenyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsemenyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsemenyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
