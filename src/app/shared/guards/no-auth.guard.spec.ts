import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NoAuthGuard } from './no-auth.guard';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SnackbarService } from 'src/app/features/snackbar/snackbar.service';
import { SharedModule } from '../shared/shared.module';

function fakeRouterState(url: string): RouterStateSnapshot {
    return { url } as RouterStateSnapshot;
}

describe('NoAuthGuard', () => {
    let guard: NoAuthGuard;
    let routerSpy: jasmine.SpyObj<Router>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, SharedModule],
            providers: [SnackbarService],
        });

        guard = TestBed.inject(NoAuthGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
