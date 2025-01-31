import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Mi Aplicación</span>
    </mat-toolbar>
    <button mat-button color="primary">Haz clic aquí</button>
  `,
})
export class AppComponent {}