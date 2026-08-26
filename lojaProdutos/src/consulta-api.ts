import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Produto from './typeProduto';

@Injectable({
  providedIn: 'root',
})
export class ConsultaAPI {
  private HTTP = inject(HttpClient);
  private rotaAPI: string = "http://localhost:3000";

  // Cria um sinal reativo para armazenar a lista
  produtos = signal<Produto[]>([]);

  listaProdutos(): void {
    this.HTTP.get<Produto[]>(`${this.rotaAPI}/produtos`).subscribe({
      next: (dados) => {
        this.produtos.set(dados); // Atualiza o sinal
        console.log("Produtos listados com sucesso!");
      },
      error: (err) => console.error("Erro: ", err),
    });
  }
}
