import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsemenyListaComponent } from './esemeny-lista-component';

describe('EsemenyListaComponent', () => {
  let component: EsemenyListaComponent;
  let fixture: ComponentFixture<EsemenyListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsemenyListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsemenyListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
