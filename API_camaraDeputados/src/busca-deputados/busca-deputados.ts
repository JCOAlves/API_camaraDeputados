import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../app/deputado-service';
import { Deputado } from '../app/deputados';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-busca-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './busca-deputados.html',
  styleUrl: './busca-deputados.css',
})
export class BuscaDeputados {
  // Classe de serviço
  readonly #deputadoService = inject(DeputadoService);

  // Lista de deputados
  protected deputados = signal<Deputado[]>([]);

  #validaForm = inject(FormBuilder);
  formDeputado = this.#validaForm.group({
    siglaUF: ['', [Validators.required, Validators.maxLength(2)]]
  });

  constructor() {
    this.#deputadoService.ListaDeputados().subscribe(res => {
      this.deputados.set(res.dados)
    })
  }

  onSubmit(){
    if(this.formDeputado.valid){
      console.log(this.formDeputado.value.siglaUF)
      this.#deputadoService.DeputadosUF(this.formDeputado.value.siglaUF="RN").subscribe(res => {
        console.log("res.dados")
        this.deputados.set(res.dados)
      })
      console.log("ruithr")
      return;
    }
  }
}
