import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaAPI } from './deputados';

@Injectable({
  providedIn: 'root',
})
export class DeputadoService {
  readonly APIUrl = "https://dadosabertos.camara.leg.br/api/v2/";
  readonly #HTTP = inject(HttpClient);

  ListaDeputados(): Observable<RespostaAPI> {
    return this.#HTTP.get<RespostaAPI>(`${this.APIUrl}/deputados?ordem=ASC&ordenarPor=nome`);
  };

  DeputadosUF(SiglaEstado: string): Observable<RespostaAPI> {
    return this.#HTTP.get<RespostaAPI>(`${this.APIUrl}/deputados?ordem=ASC&ordenarPor=nome&siglaUf=${SiglaEstado}`);
  }
  
}
