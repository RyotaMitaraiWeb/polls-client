import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ChoiceComponent } from '../shared/choice/choice.component';
import { PollPageComponent } from './poll-page/poll-page.component';

export abstract class EnsureImportedOnceModule {
    protected constructor(targetModule: any) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded.`);
        }
    }
}

@NgModule({
    declarations: [
  
  ],
    imports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        CreatePollComponent,
        ChoiceComponent,
        PollPageComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        CreatePollComponent,
        ChoiceComponent,
        PollPageComponent,
    ],
})
export class CoreModule extends EnsureImportedOnceModule {
    public constructor(@SkipSelf() @Optional() parent: CoreModule) {
        super(parent);
    }
}