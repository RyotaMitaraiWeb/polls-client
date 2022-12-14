import { TestBed } from '@angular/core/testing';

import { SearchPollsResolver } from './search-polls.resolver';

describe('SearchPollsResolver', () => {
  let resolver: SearchPollsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SearchPollsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
