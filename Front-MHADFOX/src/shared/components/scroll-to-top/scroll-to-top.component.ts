import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule,MatIcon], // Asegúrate de incluir CommonModule aquí
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Mostrar el botón si el usuario ha desplazado más de 300px
    this.isVisible = window.scrollY > 100;
  }

  scrollToTop(): void {
    // Desplazar hacia la parte superior con animación suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


