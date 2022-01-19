import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


const routes: Routes = [
  {path:" ", redirectTo:"login", pathMatch:"full"},
  // {path:"home", component:HomeComponent},
  {path:"Login", component:LoginComponent},
  {path:"Registration", component:RegisterComponent},
  {path:"UserDashboard", component:UserdashboardComponent,canActivate:[AuthGuard]},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
