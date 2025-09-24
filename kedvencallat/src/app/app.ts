import { Component, EventEmitter } from '@angular/core';
import { Reszletezo } from './reszletezo/reszletezo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Reszletezo, CommonModule, EventEmitter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  kedvencAllatok: string[] = ['kutya', 'cica', 'nyuszi', 'papagáj'];
  selectedAnimal?: string;

  selectAnimal(allat: string) {
    this.selectedAnimal = allat;
  }

  removeAnimal(allat: string) {
    this.kedvencAllatok = this.kedvencAllatok.filter(a => a !== allat);
    if (this.selectedAnimal === allat) {
      this.selectedAnimal = undefined;
    }
  }
}