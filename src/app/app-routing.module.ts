import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkHistoryComponent } from './about/work-history/work-history.component';
import { UsersComponent } from './users/users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UsersResolverService } from './users-resolver.service';
import { SingleUserResolverService } from './single-user-resolver.service';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: { users: UsersResolverService },
    canActivate: [AppGuard],
    canActivateChild: [AppGuard],
    canDeactivate: [AppGuard],
    children: [
      {
        path: ':id',
        component: SingleUserComponent,
        resolve: { user: SingleUserResolverService }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
