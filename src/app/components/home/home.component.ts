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
      // el método navigate de router permite navegar a una ruta interna generada como array
      this.router.navigate(['/students'])

      // el método navigateByUrl en vez permite navegar a una ruta interna generada como texto
      // this.router.navigateByUrl ('/students')

    } else {
      this.error = true
    }
  }
}
