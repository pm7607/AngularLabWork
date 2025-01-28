import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  filteredResults: string[] = [];
  allData: string[] = [
    'Angular Basics',
    'Angular CLI',
    'Dependency Injection',
    'Routing and Navigation',
    'State Management',
    'Unit Testing',
  ];
  onSearch(): void {
    this.filterResults();
  }
  filterResults(): void {
    if (this.searchQuery.trim()) {
      this.filteredResults = this.allData.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredResults = [];
    }
  }

}
