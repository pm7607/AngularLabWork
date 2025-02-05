import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  username=new FormControl('',[Validators.required,Validators.minLength(5)]);
  password=new FormControl('',[Validators.required,Validators.email]);

  onSubmit(){
    console.log(this.username.value);
    console.log(this.password.value);
  }
}
