import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { componentesGuard } from './componentes-guard';

describe('componentesGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => componentesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
