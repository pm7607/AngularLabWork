import { CommonModule } from '@angular/common';
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
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './student-forms.component.html',
  styleUrl: './student-forms.component.css',
})
export class StudentFormsComponent {
  students: [ Student ] = [{ name: '', email: '', address: '' }];

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl(''),
  });


  addStudent() {
    this.students.push(this.studentForm.value as Student);
    this.studentForm.reset();
  }
  delete(i:number){
    this.students.splice(i,1)
  }
}
