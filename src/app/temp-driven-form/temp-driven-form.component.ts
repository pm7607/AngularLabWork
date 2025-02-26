import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-form',
  imports: [FormsModule,NgIf],
  templateUrl: './temp-driven-form.component.html',
  styleUrl: './temp-driven-form.component.css'
})
export class TempDrivenFormComponent {
  title = 'templatedrivenforms';
  user={
   
    uemail:'',
    upassword:'',
    uspi:null
  }
}
