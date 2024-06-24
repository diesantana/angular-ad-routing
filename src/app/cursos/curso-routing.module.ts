import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';

const cursosRoutes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'cursoNotFound', component: CursoNotFoundComponent},
  {path: ':id', component: CursoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
