import { CanDeactivateFn } from '@angular/router';
import { ICanComponentDeactivate } from './iCanComponentDeactivate';

export const alunosDeactivateGuard: CanDeactivateFn<ICanComponentDeactivate> = (
  component: ICanComponentDeactivate
) => {
    if (component.canDeactivate()) {
      console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - allowed`);
      return true;
    } else {
      console.log(`💂‍♀️ [Guard] - Can Deactivate Guard - not allowed`);
      return false;
  }
}
