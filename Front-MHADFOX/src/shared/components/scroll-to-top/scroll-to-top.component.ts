import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  isVisible = false; // Controla la visibilidad del botón
  animationRunning = false; // Controla si la animación está activa

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Muestra el botón si el usuario ha desplazado más de 100px
    if (window.scrollY > 100) {
      this.isVisible = true;
      this.animationRunning = true; // Inicia la animación de entrada
    } else {
      this.isVisible = false;
      this.animationRunning = true; // Inicia la animación de salida
    }
  }

  onAnimationEnd(): void {
    if (!this.isVisible) {
      this.animationRunning = false; // Desactiva la animación de salida
    }
  }

  scrollToTop(): void {
    // Desplaza hacia arriba con animación suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
