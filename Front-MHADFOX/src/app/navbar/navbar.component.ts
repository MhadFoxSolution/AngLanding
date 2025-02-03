import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Funciones para los clics (puedes personalizar)
  handleButton1() {
    console.log('Botón 1 clickeado');
  }

  handleButton2() {
    console.log('Botón 2 clickeado');
  }

  handleButton3() {
    console.log('Botón 3 clickeado');
  }
}