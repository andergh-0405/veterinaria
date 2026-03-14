import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { guaMatchGuard } from './gua-match-guard';

describe('guaMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guaMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
