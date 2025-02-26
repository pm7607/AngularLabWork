import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diractives',
  imports: [NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,NgStyle],
  templateUrl: './diractives.component.html',
  styleUrl: './diractives.component.css'
})
export class DiractivesComponent {
  title = 'directives';
  a:boolean= true;
  operation(){
    this.a=!this.a
  }
  day:any;
  initVar(e:any){
    this.day=e.target.value;
  }
  

  demo: any;
style = {};

changestyle(): any {
  
  this.demo = setInterval(() => {
    this.style = { "font-size": "55px" };
  }, 100);

  setTimeout(() => {
    clearInterval(this.demo);
    this.style = { "font-size": "15px" };
  }, 500); 
}
}
