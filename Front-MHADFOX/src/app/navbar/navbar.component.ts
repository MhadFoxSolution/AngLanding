import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  // Alterna la visualización del menú móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Navega a la ruta indicada y cierra el menú móvil
  navigateTo(destination: string) {
    console.log(`Navegando a: ${destination}`);
    this.router.navigate([destination]);
    this.isMenuOpen = false;
  }

  // Métodos para la versión Desktop
  hdlBtnhome() {
    this.navigateTo('inicio');
  }

  hdlBtnAbout() {
    this.navigateTo('quienes-somos');
  }

  hdlBtnContact() {
    this.navigateTo('contacto');
  }
}
