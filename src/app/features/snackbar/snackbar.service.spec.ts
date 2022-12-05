import { TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
    let service: SnackbarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]
        });
        service = TestBed.inject(SnackbarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
