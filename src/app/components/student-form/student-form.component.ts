import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  inputForm : FormGroup
  studentService = inject (StudentsService)
  arrGrades : Array<any> = []

  constructor () {

    // inicialización de los validadores del formulario
    this.inputForm = new FormGroup ({
      id: new FormControl (null,[]),
      name: new FormControl (null,[
        Validators.required,
        Validators.minLength(3)
      ]),
      age: new FormControl (null,[
        Validators.required
      ]),
      email: new FormControl (null,[
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)   /* validación del patrón de email */
      ]),
      grade: new FormControl (null,[
        Validators.required,
      ]),
      description: new FormControl (null,[])
    },[])
  }

  // inicializamos desde BBDD el array con los elementos para el listado del filtro de estudiantes
  ngOnInit () {
    this.arrGrades = this.studentService.getAllGrades ()
  }

  // recogemos el input del formulario para realizar el insert en el servicio
  getDataForm () :void {
    let msg : string = this.studentService.insertNewStudent(this.inputForm.value)
    alert(msg)
    this.inputForm.reset()
  }

  // Función para la validación de los elementos del formulario

  checkControl (formControlName : string, validator:string) : boolean | undefined {
    return this.inputForm.get(formControlName)?.hasError(validator) && (this.inputForm.get(formControlName)?.touched)
  }

}
