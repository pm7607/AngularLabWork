import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-practical-page',
  imports: [RouterLink,NgFor],
  templateUrl: './practical-page.component.html',
  styleUrl: './practical-page.component.css'
})
export class PracticalPageComponent {
  cards:any[] = [
    {
      title: 'Resume Builder',
      image: '/images/ResumeBuilder.webp',
      description: 'An Angular-powered Resume Maker designed to craft professional resumes seamlessly.',
      link: 'resume-maker'
    },
    {
      title: 'Static CURD Operations',
      image: '/images/CURD.png',
      description: 'A simple Angular application to perform CURD operations on a static array.',
      link: 'static-curddemo'
    },
    {
      title: 'Array of Objects',
      image: '/images/arrofobj.png',
      description: 'An Angular application to perform CURD operations on an array of objects.',
      link: 'array-of-obj'
    },
    {
      title: 'Directives',
      image: '/images/directives.jpg',
      description: 'An Angular application to demonstrate the use of directives in Angular.',
      link: 'diractives'
    },
    {
      title: 'Template Driven Form',
      image: '/images/forms.jpeg',
      description: 'An Angular application to demonstrate the use of template-driven forms in Angular.',
      link: 'temp-driven-form'
    },
    {
      title: 'Practical Demos',
      image: '/images/practical.jpg',
      description: 'An Angular application to demonstrate the use of Practicals in Angular.',
      link: 'lab-practicals'
    },
    {
      title: 'Reactive Forms',
      image: '/images/reactive.png',
      description: 'An Angular application to demonstrate the use of Reactive forms in Angular.',
      link: 'reactive-forms'
    },
    {
      title: 'Student Forms',
      image: '/images/student.png',
      description: 'An Angular application to demonstrate the use of Student forms in Angular.',
      link: 'student-forms'
    },
    {
      title: 'Route Demo & nested routes',
      image: '/images/student.png',
      description: 'An Angular application to demonstrate the use of Route & nested Routes in Angular.',
      link: 'route-demo'
    },
  ];
}
