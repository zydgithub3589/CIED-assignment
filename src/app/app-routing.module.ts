import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReverseWordComponent } from './components/reverse-word/reverse-word.component';

const routes: Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'dashboard' , component : DashboardComponent },
  { path : 'question' , component : ReverseWordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
