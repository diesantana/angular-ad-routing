import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { Aluno } from './aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
