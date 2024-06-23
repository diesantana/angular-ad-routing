import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoDetalheComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  providers: [
    AlunosService
  ]
})
export class AlunosModule { }
