import { TestBed } from '@angular/core/testing';

import { PollResolver } from './poll-resolver.resolver';

describe('PollResolverResolver', () => {
    let resolver: PollResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        resolver = TestBed.inject(PollResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });
});
