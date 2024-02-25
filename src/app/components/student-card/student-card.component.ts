import { Component, Input } from '@angular/core';
import { IStudent } from '../../interfaces/istudent.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input () currentStudent : IStudent | any 
  
}
