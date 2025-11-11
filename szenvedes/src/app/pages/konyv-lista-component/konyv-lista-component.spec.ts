import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvListaComponent } from './konyv-lista-component';

describe('KonyvListaComponent', () => {
  let component: KonyvListaComponent;
  let fixture: ComponentFixture<KonyvListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
