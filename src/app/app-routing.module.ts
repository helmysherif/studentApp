import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsComponent } from './components/students/students.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path : '' , redirectTo : 'login' , pathMatch : 'full'},
  {path : 'home' , canActivate : [AuthGuard] , component : HomeComponent},
  {path : 'students' , canActivate : [AuthGuard] , component : StudentsComponent},
  {path : 'studentDetail/:id' , canActivate : [AuthGuard] , component : StudentDetailsComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : "**" , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
