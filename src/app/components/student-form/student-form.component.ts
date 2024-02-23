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

  constructor () {

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
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      grade: new FormControl ('default',[
        Validators.required,
        this.gradeValidator
      ])
    },[])
  }

  getDataForm () :void {
    let msg : string = this.studentService.insertNewStudent(this.inputForm.value)
    alert(msg)
    this.inputForm.reset()
  }

  checkControl (formControlName : string, validator:string) : boolean | undefined {
    return this.inputForm.get(formControlName)?.hasError(validator) && (this.inputForm.get(formControlName)?.touched)
  }

  gradeValidator (grade : AbstractControl | any) : any {
    return (grade === "Clase") ? {'gradevalidator' : "Debes Seleccionar un curso"} : null
  }

}
