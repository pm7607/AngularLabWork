import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-route-demo',
  imports: [RouterOutlet,HeaderComponent,SidebarComponent,RightbarComponent,FooterComponent],
  templateUrl: './route-demo.component.html',
  styleUrl: './route-demo.component.css'
})
export class RouteDemoComponent {

}
