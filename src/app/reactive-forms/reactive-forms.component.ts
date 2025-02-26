import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  username=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(5)]);

  submittedData: { username: string; password: string; } | null = null;

  onSubmit(){
    this.submittedData = {
      username: this.username.value || '',
      password: this.password.value || ''
    }
    this.username.reset();
    this.password.reset();
  }
}
