
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kapcsolat-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kapcsolat-component.html',
  styleUrl: './kapcsolat-component.css'
})
export class KapcsolatComponent {
  private _nev = signal('');
  private _email = signal('');
  private _uzenet = signal('');
  error = signal('');
  success = signal(false);

  get nev() {
    return this._nev();
  }
  set nev(val: string) {
    this._nev.set(val);
  }
  get email() {
    return this._email();
  }
  set email(val: string) {
    this._email.set(val);
  }
  get uzenet() {
    return this._uzenet();
  }
  set uzenet(val: string) {
    this._uzenet.set(val);
  }

  kuldes() {
    if (!this.nev || !this.email || !this.uzenet) {
      this.error.set('Minden mező kitöltése kötelező!');
      return;
    }
    if (!this.email.includes('@')) {
      this.error.set('Érvényes email címet adj meg!');
      return;
    }
    this.success.set(true);
    this.error.set('');
    this.nev = '';
    this.email = '';
    this.uzenet = '';
  }
}
