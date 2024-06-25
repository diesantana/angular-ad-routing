import { Component } from '@angular/core';
import { Aluno } from '../aluno';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     let _aluno = this.alunosService.getAluno(id);
    //     if(_aluno) {
    //       this.aluno = _aluno;
    //     }
    //   }
    // );
    this.inscricao = this.route.data.subscribe( (data) => {
      this.aluno = data['aluno'];
    });
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
