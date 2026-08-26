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
    if(this.API.produtos()){
      console.log(this.API.produtos())
      this.listaProdutos.set(this.API.produtos())

    } else{
      console.log("bada")
    }
  }

  
}
