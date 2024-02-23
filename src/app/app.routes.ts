import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsComponent } from './components/students/students.component';

export const routes: Routes = [
    // {path: '',},
    {path: 'home',component: HomeComponent},
    {path:'students', component: StudentsComponent},
    {path:'subscribe', component: StudentFormComponent}
];
