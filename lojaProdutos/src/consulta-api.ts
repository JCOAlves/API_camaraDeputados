import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Produto from './typeProduto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaAPI {
  #HTTP = inject(HttpClient);
  #rotaAPI: string = "http://localhost:3000";

  listaProdutos(): Observable<Produto[] | null> {
    console.log("Produto buscado")
    return this.#HTTP.get<Produto[] | null>(`${this.#rotaAPI}/produtos`)
  };

  
}
