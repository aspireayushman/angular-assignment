import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanViewComponent } from './loan-view/loan-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, 
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'loan', component: LoanDetailsComponent },
      { path: 'loan-view', component: LoanViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
