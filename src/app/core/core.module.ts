import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export abstract class EnsureImportedOnceModule {
    protected constructor(targetModule: any) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded.`);
        }
    }
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
})
export class CoreModule extends EnsureImportedOnceModule {
    public constructor(@SkipSelf() @Optional() parent: CoreModule) {
        super(parent);
    }
}