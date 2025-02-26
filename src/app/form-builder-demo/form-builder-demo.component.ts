import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-demo',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form-builder-demo.component.html',
  styleUrl: './form-builder-demo.component.css',
})
export class FormBuilderDemoComponent {
  private _fb = inject(FormBuilder);

  studentform = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(){
    console.log(this.studentform.value);
  }
}
