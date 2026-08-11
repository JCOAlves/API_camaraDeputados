import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscaDeputados } from '../busca-deputados/busca-deputados';

@Component({
  selector: 'app-root',
  imports: [BuscaDeputados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('API_camaraDeputados');
}
