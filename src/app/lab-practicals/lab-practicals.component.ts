import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-lab-practicals',
  imports: [RouterOutlet,CommonModule,HeaderComponent],
  templateUrl: './lab-practicals.component.html',
  styleUrl: './lab-practicals.component.css'
})
export class LabPracticalsComponent {
  title = 'PracticalDemo';
  date=new Date();
  spi=8.3;
  click=true;
  handleclicked(){
    setInterval(()=>{
      this.click=!this.click
    },100)
  }
  ngOnInit(){
    this.handleclicked()
  }
  temp=""
  desplaydetail(event:any){
    this.temp=event.target.value;
  }
  temp1=""
  clicked(){
    this.temp1="hello"
  }
  keyupvalue=""
keyupbutton(e:any){
  this.keyupvalue=e.type

}
mousevalue=""
mousebutton(e:any){
  this.mousevalue=e.type
}
f=""
fm(e:any){
  if(e.type==="focus"){
    this.f="focused"
  }
  else if(e.type==="blur"){
    this.f="blured"
  }
  else if(e.type==="submit"){
    this.f="submited"
    e.preventDefault();
  }
  else if(e.type==="reset"){
    this.f="reset"
    e.preventDefault();  // Prevent form reset to avoid input fields clearing
  }
}
}
