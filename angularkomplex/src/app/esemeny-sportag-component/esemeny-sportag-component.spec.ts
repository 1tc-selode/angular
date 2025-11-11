import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenySportagComponent } from './esemeny-sportag-component';

describe('EsemenySportagComponent', () => {
  let component: EsemenySportagComponent;
  let fixture: ComponentFixture<EsemenySportagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsemenySportagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsemenySportagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
