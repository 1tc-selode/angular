import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimalDetail } from "./animal-detail/animal-detail";

@Component({
  selector: 'app-root',
  imports: [CommonModule, AnimalDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  animals = [
    { name: 'Kutya', description: 'A kutya hűséges társ.' },
    { name: 'Cica', description: 'A cica szeret dorombolni.' },
    { name: 'Nyuszi', description: 'A nyuszi gyorsan szalad.' },
    { name: 'Papagáj', description: 'A papagáj sokat beszél.' }
  ];

  selectedAnimal: { name: string, description: string } | null = null;

  // állat kiválasztása
  selectAnimal(animal: { name: string, description: string }) {
    this.selectedAnimal = animal;
  }

  // gyermek komponens jelez, hogy törölni kell
  removeAnimal(animalName: string) {
    this.animals = this.animals.filter(a => a.name !== animalName);
    this.selectedAnimal = null;
  }

  // új állat hozzáadása
  addAnimal(newName: string, newDescription: string) {
    if (newName.trim()) {
      this.animals.push({ name: newName, description: newDescription });
    }
  }
}
