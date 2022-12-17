import { TestBed } from '@angular/core/testing';

import { RedirectInterceptor } from './redirect.interceptor';

describe('RedirectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RedirectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RedirectInterceptor = TestBed.inject(RedirectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
