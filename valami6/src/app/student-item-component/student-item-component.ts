import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../app';

@Component({
  selector: 'app-student-item-component',
  standalone: true,
  imports: [],
  templateUrl: './student-item-component.html',
  styleUrls: ['./student-item-component.css']
})
export class StudentItemComponent {
  @Input() student!: Student;
  @Output() delete = new EventEmitter<number>();
  @Output() select = new EventEmitter<Student>();

  onDelete() {
    this.delete.emit(this.student.id);
  }

  onSelect() {
    this.select.emit(this.student);
  }
}
