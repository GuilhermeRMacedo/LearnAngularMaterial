import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TrainingComponent} from './training/training.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'training', component: TrainingComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
