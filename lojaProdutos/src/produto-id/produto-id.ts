import { inject, Component, input, signal, OnInit, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { ConsultaAPI } from '../consulta-api';
import Produto from '../typeProduto';

@Component({
  selector: 'app-produto-id',
  imports: [],
  templateUrl: './produto-id.html',
  styleUrl: './produto-id.css',
})
export class ProdutoId implements OnInit {
  // 1. Mudamos para aceitar undefined inicialmente, evitando a quebra do ciclo de vida
  id = input<number | undefined>(undefined); 
  
  produto = signal<Produto | null | undefined>(null);
  #API = inject(ConsultaAPI);
  #destroyRef = inject(DestroyRef);
  
  // Gatilho manual seguro para gerenciar o fluxo do RxJS
  #idGatilho = new Subject<number>();

  ngOnInit() {
    // 2. Configura o pipeline do RxJS que escuta o gatilho manual
    this.#idGatilho.pipe(
      filter(idAtual => idAtual !== undefined && idAtual !== null),
      switchMap(idAtual => this.#API.listaProdutoID(idAtual)),
      takeUntilDestroyed(this.#destroyRef)
    ).subscribe({
      next: (produto) => this.produto.set(produto),
      error: (err) => console.error("Erro na requisição de produto por ID", err)
    });

    // 3. Lê o ID com segurança no OnInit quando o valor já está garantido pelo Angular
    const idInicial = this.id();
    if (idInicial !== undefined && idInicial !== null) {
      this.#idGatilho.next(idInicial);
    }
  }
}
