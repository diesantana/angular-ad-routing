import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { AlunosService } from '../alunos/alunos.service';
import { Aluno } from '../alunos/aluno';

export const alunosResolver: ResolveFn<Aluno> = (route, state) => {
  const alunoService = inject(AlunosService); // injeta o service para buscar os dados
  let aluno = alunoService.getAluno(route.params['id']); // faz a busca do aluno no service

  if(!aluno) {
    throw new Error('Erro ao buscar os dados');
  }
  return aluno;
};


