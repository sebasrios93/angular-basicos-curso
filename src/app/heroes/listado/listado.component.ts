import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Venom','Hulk','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado= this.heroes.shift() || '';
  }

}
