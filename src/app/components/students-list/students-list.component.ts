import { Component, Output, inject } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../interfaces/istudent.interface';
import { StudentCardComponent } from '../student-card/student-card.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [StudentCardComponent, FormsModule, FilterComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {

  
  studentServices = inject (StudentsService)
  arrStudents : IStudent [] = []

  ngOnInit () {
    this.arrStudents = this.studentServices.getAllStudents()
  }

  filterByGrade ($event : string) : void {
    this.arrStudents = this.studentServices.getByGrade ($event)
  } 

}
