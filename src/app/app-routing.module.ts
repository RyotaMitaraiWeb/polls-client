import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoAuthGuard } from './shared/guards/no-auth.guard';

const routes: Routes = [
    { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
