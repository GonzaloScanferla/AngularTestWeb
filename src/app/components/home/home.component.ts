import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  error : boolean = false
  // v1 - injección de la dependencia router. Es una librería que permite redirigir a rutas internas
  router = inject (Router)

  // v2 - lo añado como parametro privado del contructor (versiones anteriores a la 17)
  // constructor(private router : Router) {
  // }

  suscribe (suscribeForm : any) : void {
    this.error = false
    if (suscribeForm.value.email !== "") {
      console.log (suscribeForm.value.email)
      // injección de dependencia para redireccionar a otra página
      this.router.navigate(['/students'])
    } else {
      this.error = true
    }
  }
}
