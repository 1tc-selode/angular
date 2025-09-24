import { Component } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
}

import { StudentListComponent } from './student-list-component/student-list-component';
import { StudentDetailComponent } from './student-detail-component/student-detail-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, StudentDetailComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  students: Student[] = [
    { id: 1, name: 'Kiss Anna', age: 17, email: 'anna.kiss@example.com' },
    { id: 2, name: 'Nagy Béla', age: 18, email: 'bela.nagy@example.com' },
    { id: 3, name: 'Szabó Csilla', age: 16, email: 'csilla.szabo@example.com' }
  ];

  selectedStudent: Student | null = null;

  onDeleteStudent(studentId: number) {
    this.students = this.students.filter(s => s.id !== studentId);
    if (this.selectedStudent && this.selectedStudent.id === studentId) {
      this.selectedStudent = null;
    }
  }

  onSelectStudent(student: Student) {
    this.selectedStudent = student;
  }
}
