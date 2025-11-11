import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmKategoriaComponent } from './film-kategoria-component';

describe('FilmKategoriaComponent', () => {
  let component: FilmKategoriaComponent;
  let fixture: ComponentFixture<FilmKategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmKategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmKategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
