import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false; // Estado del menú hamburguesa
  animationRunning = false; // Estado de la animación

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.animationRunning = true; // Activa animación de apertura
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false; // Activa animación de cierre
    this.animationRunning = true; // Asegura que el menú no desaparezca instantáneamente
  }

  onAnimationEnd(): void {
    if (!this.isMenuOpen) {
      this.animationRunning = false; // Finaliza la animación al cerrar el menú
    }
  }
}
