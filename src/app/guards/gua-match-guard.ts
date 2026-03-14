import { CanMatchFn } from '@angular/router';

export const guaMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};
