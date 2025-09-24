import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Detail } from './detail/detail';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Detail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  animal = 
  [
    { name: 'kutya', descreption: 'A kutya hűséges' },
    { name: 'macska', descreption: 'A macska független' },
    { name: 'hal', descreption: 'A hal csendes' }
  ]

  addAnimal( newName: string, newDescreption: string ) {
  if(newName.trim()){
    this.animal.push({name: newName, descreption: newDescreption});
  }

}

}

