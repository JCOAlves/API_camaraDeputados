import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultaAPI } from '../consulta-api';
import Produto from '../typeProduto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  listaProdutos = signal<Produto[] | null>([]);

  private API = inject(ConsultaAPI);

  ngOnInit(){
    this.API.listaProdutos().subscribe({
      next: (produtos) => this.listaProdutos.set(produtos),
      error: (err) => console.error("Erro na requisição de produtos", err)
    });
  };
}
