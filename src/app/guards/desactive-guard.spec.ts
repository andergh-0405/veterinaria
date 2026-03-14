import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { desactiveGuard } from './desactive-guard';

describe('desactiveGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => desactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
