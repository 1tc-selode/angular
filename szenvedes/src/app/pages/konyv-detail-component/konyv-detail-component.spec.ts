import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvDetailComponent } from './konyv-detail-component';

describe('KonyvDetailComponent', () => {
  let component: KonyvDetailComponent;
  let fixture: ComponentFixture<KonyvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
