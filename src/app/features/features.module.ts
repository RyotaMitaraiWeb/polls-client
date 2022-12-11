import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SharedModule } from '../shared/shared/shared.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';


@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        SearchFieldComponent, 
        MenuButtonComponent,
        SharedModule,
    ],
    exports: [SearchFieldComponent]
})
export class FeaturesModule { }
