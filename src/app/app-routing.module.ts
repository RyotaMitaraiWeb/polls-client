import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreatePollComponent } from './core/create-poll/create-poll.component';
import { HomeComponent } from './core/home/home.component';
import { PollPageComponent } from './core/poll-page/poll-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';
import { PollResolver } from './shared/resolvers/poll-resolver.resolver';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    {
        path: 'poll', children: [
            {
                path: ':id', component: PollPageComponent, pathMatch: 'full',
                resolve: { data: PollResolver}
            },
            {
                path: 'create', component: CreatePollComponent, canActivate: [AuthGuard], pathMatch: 'full',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
