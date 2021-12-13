import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes : string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor','Capitan America'];
  heroeborrado : string ='';

  borrarHerore():void{

   this.heroeborrado = this.heroes.shift() || "";
  }
}
