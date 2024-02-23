import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent.interface';
import { STUDENTS } from '../db/students.db';
import { GRADES } from '../db/grades.db';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // creo los elementos privados para que, una vez inicializados, no puedan ser modificados por otros elelemntos
  private arrStudents : IStudent [] = STUDENTS 
  private id : number = 4 

  private arrGrades : Array <object> = GRADES

  getAllStudents () : IStudent [] {
    return this.arrStudents
  }

  getById (id : number) : IStudent | undefined {
    return this.arrStudents.find ((student: IStudent) => student.id === id)
  }

  getByGrade (grade : string) : IStudent [] {
    // v1
    // return (grade !== "" ) ? 
    //   this.arrStudents.filter ((student: IStudent) => student.grade === grade) :
    //   this.getAllStudents()

    // v2
    return this.arrStudents.filter ((student: IStudent) => student.grade.includes(grade))

  }

  insertNewStudent (newStudent:IStudent) : string {
    newStudent.id = this.id
    let position = this.arrStudents.findIndex(student => student.email === newStudent.email)
    if (position === -1) {
      let test = this.arrStudents.push (newStudent)
      this.id ++
      return (test) ?  "Insertado correctamente" : "No se ha podido añadir el alumno"
    } else {
      return 'Alumno duplicado'
    }
  }

  getAllGrades () : Array<object> {
    return this.arrGrades
  }

}
