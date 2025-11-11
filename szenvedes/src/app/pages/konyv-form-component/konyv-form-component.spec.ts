import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KonyvFormComponent } from './konyv-form-component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('KonyvFormComponent', () => {
  let component: KonyvFormComponent;
  let fixture: ComponentFixture<KonyvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonyvFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
