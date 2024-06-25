import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../login/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.verificaUsuarioAutenticado) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};

export const canMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.verificaUsuarioAutenticado) {
    console.log("Modulo liberado! 💂💂 ");
    return true;

  }
  console.log("Sem acesso ao modulo! 💂💂 ");
  router.navigate(['/login']);
  return false;
};
