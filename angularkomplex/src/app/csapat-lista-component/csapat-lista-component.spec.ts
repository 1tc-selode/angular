import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapatListaComponent } from './csapat-lista-component';

describe('CsapatListaComponent', () => {
  let component: CsapatListaComponent;
  let fixture: ComponentFixture<CsapatListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsapatListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsapatListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
