import { TestBed } from '@angular/core/testing';

import { AllPollsResolver } from './all-polls.resolver';

describe('AllPollsResolver', () => {
  let resolver: AllPollsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AllPollsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
