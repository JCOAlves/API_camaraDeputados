import { Routes } from '@angular/router';
import { BuscaDeputados } from '../busca-deputados/busca-deputados';

export const routes: Routes = [
    { path: "a", component: BuscaDeputados },
    { path: "", redirectTo: "/a", pathMatch: "full" }
];
