import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Importamos CommonModule y MatIconModule
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  isDarkTheme = false; // Estado para rastrear el tema actual
  icon: string = 'dark_mode'; // Icono inicial para tema claro

  constructor(private renderer: Renderer2) {}

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme; // Cambia el estado del tema

    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme'); // Agrega la clase para tema oscuro
      this.icon = 'light_mode'; // Cambia el icono al modo claro
    } else {
      this.renderer.removeClass(document.body, 'dark-theme'); // Elimina la clase para tema oscuro
      this.icon = 'dark_mode'; // Cambia el icono al modo oscuro
    }
  }
}
