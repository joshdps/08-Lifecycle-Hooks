import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecycle';
  show: boolean = true;
  nombre: string = ''

  onClick(){
    this.show = !this.show;
  }
  save(){

  }
}
