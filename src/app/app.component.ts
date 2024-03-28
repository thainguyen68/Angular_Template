import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template';
  currentCustomer = 'Maria';
  itemImageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
}
