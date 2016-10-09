import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  persons : Array<Person> = [new Person(1,"Tester"), new Person(2, "Maxi")];
}


export class Person {
  id: number;
  name: string;

  constructor(id, name){
    this.id = id;
    this.name = name;
  }
}