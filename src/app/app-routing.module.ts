import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard, canMatchGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/curso.module').then(m => m.CursoModule),
    canActivate: [authGuard],
    // canMatch: [authGuard]
    canMatch: [canMatchGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [authGuard],
    // canMatch: [authGuard]
    canMatch: [canMatchGuard]
  },
  {path: '', component: HomeComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
