import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-maker',
  imports: [NgFor],
  templateUrl: './resume-maker.component.html',
  styleUrl: './resume-maker.component.css'
})
export class ResumeMakerComponent {
  tempwork={}
  alldetails:any={
    workExperience:[]
  }
  datafill(e:any){
    this.alldetails={...this.alldetails,[e.target.name]:e.target.value};
  }
  workdata(e:any){
    this.tempwork={...this.tempwork,[e.target.name]:e.target.value};
  }
  add(){
    this.alldetails.workExperience.push(this.tempwork)
  }
}
