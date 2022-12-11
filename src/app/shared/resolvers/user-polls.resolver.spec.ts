import { TestBed } from '@angular/core/testing';

import { UserPollsResolver } from './user-polls.resolver';

describe('UserPollsResolver', () => {
  let resolver: UserPollsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserPollsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
