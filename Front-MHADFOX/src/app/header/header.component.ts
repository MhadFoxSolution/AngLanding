import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = 'Bienvenido a MHAD FOX Solution';
  @Input() description: string = 'Somos una empresa líder en soluciones tecnológicas innovadoras.';
}
