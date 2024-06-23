import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { FormsModule } from '@angular/forms';
import { CursoRoutingModule } from './curso-routing.module';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursoRoutingModule
    // AppRoutingModule,
  ]
})
export class CursoModule { }
