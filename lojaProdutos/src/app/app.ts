import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaAPI } from '../consulta-api';
import Produto from '../typeProduto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaProdutos = signal<Produto[] | null>([]);

  private API = inject(ConsultaAPI);

  ngOnInit(){
    this.listaProdutos.set(this.API.listaProdutos())
  }
}
