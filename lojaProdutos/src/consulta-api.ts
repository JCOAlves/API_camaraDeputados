import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Produto from './typeProduto';

@Injectable({
  providedIn: 'root',
})
export class ConsultaAPI {
  private HTTP = inject(HttpClient);
  private rotaAPI: string = "http://localhost:3000";

  listaProdutos(): Produto[] | null {
    let lista: Produto[] | null = [];
    this.HTTP.get<Produto[] | null>(`${this.rotaAPI}/produtos`).subscribe({
      next: (produtos) => {
        lista = produtos;
        lista ? console.log("Produtos listados com sucesso!") : console.log("Não há produtos listados")
      },
      error: (err) => {
        console.error("Erro na requisição ao servidor: ", err.message || err);
      },
    })
    return lista;
  };

  
}
