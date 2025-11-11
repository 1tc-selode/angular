import { Component } from '@angular/core';
import { Tododetail } from './tododetail/tododetail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Tododetail, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

    selectedToDo: {title: string, dueDate: string, priority: string, category: string, description: string} | null = null;

    toDoList = [
    {title: 'külön angol házi', dueDate: 'csütörtök', priority: 'alacsony', category: 'tanulás', description: 'a vizsgára kell tanulni, készülni az angol házikkal'},
    {title: 'vacsora', dueDate: 'ma', priority: 'magas', category: 'főzés', description: 'kell kaját csinálni, hogy ne éhezzek meg és legyen energiám'},
    {title: 'szoba takarítás', dueDate: 'vasárnap', priority: 'közepes', category: 'takarítás', description: 'ki kell takarítani a szobát, ne hogy anya mérges legyen hogy miért nem takarítottam'},
    {title: 'mosogatás', dueDate: 'ma', priority: 'alacsony', category: 'takarítás', description: 'vacsora után kötelező elmosni a tányérokat'},
    {title: 'alvás', dueDate: 'ma', priority: 'magas', category: 'pihenés', description: 'nagyon fontos az pihenés a szervezetnek'},
  ];

  addList(newTitle: string, newDueDate: string, newPriority: string, newCategory: string, newDescreption: string) {
  if (newTitle.trim() && newDueDate.trim())
  this.toDoList.push({title: newTitle, dueDate: newDueDate, priority: newPriority, category : newCategory, description: newDescreption});
  }

  selectList(todoList : {title: string, dueDate: string, priority: string, category: string, description: string}) {
    this.selectedToDo = todoList;
  }

  removeList(title: string) {
  this.toDoList = this.toDoList.filter(td => td.title !== title);
  this.selectedToDo = null;
  }
}
