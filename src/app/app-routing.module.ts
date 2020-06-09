import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/layouts/home/home.component';
import { DashboardComponent } from './shared/components/layouts/dashboard/dashboard.component';
import { AuthComponent } from './shared/components/layouts/auth/auth.component';
import { PostsModule } from './views/posts/posts.module';
import { AdminsModule } from './views/dashboard views/admins/admins.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => PostsModule
      },
     {
        path: 'admins',
        loadChildren: () => AdminsModule
      }
    ]
  },



  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
