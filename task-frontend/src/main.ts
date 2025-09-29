import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ⬅️ Importar
import { AppComponent } from './app/app';


// Si tienes un archivo de rutas, también estará aquí

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ⬅️ Proveedor para hacer llamadas REST
  ]
}).catch(err => console.error(err));