import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-resume-maker',
  imports: [NgFor, FormsModule, DatePipe],
  templateUrl: './resume-maker.component.html',
  styleUrl: './resume-maker.component.css'
})
export class ResumeMakerComponent {
  alldetails: any = {
    firstname: '',
    lastname: '',
    role: '',
    aboutus: '',
    education: [],
    workExperience: []
  };

  education: any = {
    degree: '',
    institution: '',
    year: ''
  };

  contact: any = {
    email: '',
    phone: '',
    address: ''
  };

  workExperience: any = {
    comapanyname: '',
    comapanyrole: '',
    startdate: '',
    enddate: '',
    comapanydescription: ''
  };

 

  addEducation() {
    this.alldetails.education.push({ ...this.education });
    this.education = {
      degree: '',
      institution: '',
      year: ''
    };
  }

  addExperience() {
    this.alldetails.workExperience.push({ ...this.workExperience });
    this.workExperience = {
      comapanyname: '',
      comapanyrole: '',
      startdate: '',
      enddate: '',
      comapanydescription: ''
    };
  }

}
