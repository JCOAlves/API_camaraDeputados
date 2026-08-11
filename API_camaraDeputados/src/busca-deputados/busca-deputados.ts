import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../app/deputado-service';
import { Deputado } from '../app/deputados';

@Component({
  selector: 'app-busca-deputados',
  imports: [],
  templateUrl: './busca-deputados.html',
  styleUrl: './busca-deputados.css',
})
export class BuscaDeputados {
  // Classe de serviço
  readonly #deputadoService = inject(DeputadoService);

  // Lista de deputados
  protected deputados = signal<Deputado[]>([]);

  constructor() {
    this.#deputadoService.ListaDeputados().subscribe(res => {
      this.deputados.set(res.dados)
    })
  }
}
