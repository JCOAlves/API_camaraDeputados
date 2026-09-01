import { Routes } from '@angular/router';
import { App } from './app';
import { ProdutoId } from '../produto-id/produto-id';

export const routes: Routes = [
    {path: 'produtos/:id', component: ProdutoId},
];
