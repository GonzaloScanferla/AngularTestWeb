import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsComponent } from './components/students/students.component';
import { Error404Component } from './components/error404/error404.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'subscribe', component: StudentFormComponent },
    { path: 'students/:url', component: StudentInfoComponent}, /* ruta dinámica para cada estudiante */
    { path: '**', component: Error404Component }
];
