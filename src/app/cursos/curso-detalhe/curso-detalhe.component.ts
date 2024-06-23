import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  curso: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCurso(this.id);
      }
    );
    if(this.curso == null) {
      this.router.navigate(['/cursoNotFound']);
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
