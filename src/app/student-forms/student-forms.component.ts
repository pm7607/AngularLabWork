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
  students: [ Student ] = [{ name: '', email: '', address: '' }];
  hasValue = true;


  ngOnInit(){
    if(!this.students[0].name && !this.students[0].email && !this.students[0].address){
      this.hasValue = false;
    }
    
  }

  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl(''),
  });


  addStudent() {
    if(!this.students[0].name && !this.students[0].email && !this.students[0].address){
      this.students.splice(0,1)
    }
    this.students.push(this.studentForm.value as Student);
    this.hasValue=true
    this.studentForm.reset();
  }
  delete(i:number){
    this.students.splice(i,1)
  }


}
