import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { IStudent } from '../../interfaces/istudent.interface';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent {

  // injectamos un elemento de rutas para capturar la parte dinámica de la ruta
  activatedRoute = inject (ActivatedRoute)
  studentsService = inject (StudentsService)
  currentStudent !: IStudent

  ngOnInit( ) : void {

    // generamos una dirección dinámica para la página. Con activatedRoute obtenemos el identificador único del alumno para buscar la info en la BBDD
    this.activatedRoute.params.subscribe((params:any) => {
      let currentUrl = params.url
      let response = this.studentsService.getByUrl (currentUrl)
      if (response !== undefined) {
        this.currentStudent = response
      }
      
    })

  }
}
