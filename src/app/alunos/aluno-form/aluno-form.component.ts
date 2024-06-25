import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { ICanComponentDeactivate } from '../../guards/iCanComponentDeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent implements ICanComponentDeactivate{
  aluno!: Aluno;
  inscricao!: Subscription;
  formMudou: boolean = false;

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

  onInput(){
    console.log("Algo mudou!");
    this.formMudou = true;
  }

  podeMudarRota() {
    if(this.formMudou) {
      return confirm("Tem certeza que gostaria de sair desta página?");
    }
    return true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.podeMudarRota();
  }

}
