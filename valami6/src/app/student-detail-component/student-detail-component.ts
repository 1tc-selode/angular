import { Component, Input } from '@angular/core';
import { Student } from '../app';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail-component.html',
  styleUrls: ['./student-detail-component.css']
})
export class StudentDetailComponent {
  @Input() student: Student | null = null;
}
