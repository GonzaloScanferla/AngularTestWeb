import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  studentService = inject (StudentsService)
  arrGrades : Array<any> = []
  filter : any 

  @Output() filterValue : EventEmitter <string> = new EventEmitter ()

  ngOnInit () {
    this.arrGrades = this.studentService.getAllGrades ()
  }

  // v1 - filtro con formulario template
  // filterData ( filterForm:any) : void {
  //   this.filterValue.emit(filterForm.value.grade)
  // }

  // v2 - filtro con evento Change del select
  filterData (filterForm:any) : void {
   this.filterValue.emit (filterForm.target.value)
  }

}
