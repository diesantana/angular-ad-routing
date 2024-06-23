import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any[] = [];
  pagina!: number;
  subscription!: Subscription;

  constructor(
    private cursoService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        this.pagina = params['page'];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nextPage() :void {
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: {page: this.pagina}});
  }

}
