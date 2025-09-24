import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../app';
import { StudentItemComponent } from '../student-item-component/student-item-component';

@Component({
  selector: 'app-student-list-component',
  standalone: true,
  imports: [CommonModule, StudentItemComponent],
  templateUrl: './student-list-component.html',
  styleUrls: ['./student-list-component.css']
})
export class StudentListComponent {
  @Input() students: Student[] = [];
  @Output() selectStudent = new EventEmitter<Student>();
  @Output() deleteStudent = new EventEmitter<number>();

  onSelect(student: Student) {
    this.selectStudent.emit(student);
  }

  onDelete(studentId: number) {
    this.deleteStudent.emit(studentId);
  }
}
