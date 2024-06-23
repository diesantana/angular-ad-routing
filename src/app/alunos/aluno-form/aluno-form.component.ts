import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        let _aluno = this.alunosService.getAluno(id);
        if (_aluno){
          this.aluno = _aluno;
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
