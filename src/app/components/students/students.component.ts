import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { StudentsListComponent } from '../students-list/students-list.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterOutlet, FilterComponent, StudentsListComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

}
