import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-student-forms',
  imports: [ReactiveFormsModule, FormsModule, CommonModule,NgIf],
  templateUrl: './student-forms.component.html',
  styleUrl: './student-forms.component.css',
})
export class StudentFormsComponent {
  students: Student[] = [];
  hasValue = false;
  isEdit = false;
  editIndex: number | null = null;

  ngOnInit() {
    if (!this.students.length) {
      this.hasValue = false;
    }
  }

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  addStudent() {
    if (this.isEdit && this.editIndex !== null) {
      this.students[this.editIndex] = this.studentForm.value as Student;
      this.isEdit = false;
      this.editIndex = null;
    } else {
      this.students.push(this.studentForm.value as Student);
    }
    this.hasValue = true;
    this.studentForm.reset();
  }

  delete(i: number) {
    this.students.splice(i, 1);
    if (!this.students.length) {
      this.hasValue = false;
    }
  }

  edit(i: number) {
    this.isEdit = true;
    this.editIndex = i;
    const student = this.students[i];
    this.studentForm.setValue({
      name: student.name,
      age: student.age?.toString() || '',
      email: student.email,
      phone: student.phone?.toString() || '',
      address: student.address,
    });
  }

}
