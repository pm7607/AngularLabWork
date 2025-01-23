import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ResumeMakerComponent } from './resume-maker/resume-maker.component';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,ResumeMakerComponent,IndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'All-Lab-Work-Project';
}
