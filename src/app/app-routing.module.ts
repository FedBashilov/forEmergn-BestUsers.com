import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'users', component: UsersComponent},
    {path: '**', redirectTo: 'users', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent, UsersComponent]
