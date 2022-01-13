import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  clickMe(){
    alert("Bootstap working");
  }
  obj = new Login('eminem','eminem@123');
}

