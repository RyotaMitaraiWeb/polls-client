import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AllComponent } from './core/all/all.component';
import { CreatePollComponent } from './core/create-poll/create-poll.component';
import { EditPollComponent } from './core/edit-poll/edit-poll.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PollPageComponent } from './core/poll-page/poll-page.component';
import { ProfileComponent } from './core/profile/profile.component';
import { SearchResultsComponent } from './core/search-results/search-results.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthorGuard } from './shared/guards/author.guard';
import { NoAuthGuard } from './shared/guards/no-auth.guard';
import { AllPollsResolver } from './shared/resolvers/all-polls.resolver';
import { PollResolver } from './shared/resolvers/poll-resolver.resolver';
import { SearchPollsResolver } from './shared/resolvers/search-polls.resolver';
import { UserPollsResolver } from './shared/resolvers/user-polls.resolver';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], pathMatch: 'full' },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], pathMatch: 'full', resolve: { data: UserPollsResolver }},
    {
        path: 'poll', children: [
            {
                path: '', component: SearchResultsComponent, pathMatch: 'full', resolve: { data: SearchPollsResolver},
            },
            {
                path: 'create', component: CreatePollComponent, canActivate: [AuthGuard], pathMatch: 'full',
            },
            {
                path: 'all', component: AllComponent, pathMatch: 'full', resolve: { data: AllPollsResolver }
            },
            {
                path: ':id', component: PollPageComponent, pathMatch: 'full',
                resolve: { data: PollResolver }
            },
            {
                path: ':id/edit', component: EditPollComponent, canActivate: [AuthGuard, AuthorGuard], pathMatch: 'full', resolve: { data: PollResolver }
            }
        ]
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
