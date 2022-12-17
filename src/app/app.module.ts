import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { mobileMenuReducer } from './store/mobile-menu/mobile-menu.reducers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { userReducer } from './store/user/user.reducers';
import { FeaturesModule } from './features/features.module';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { RedirectInterceptor } from './shared/interceptors/redirect.interceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(
            {
                menu: mobileMenuReducer,
                user: userReducer
            },
        ),
        BrowserAnimationsModule,
        CoreModule,
        FeaturesModule,
        HttpClientModule,
    ],
    providers: [HttpClientModule,
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true,
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
