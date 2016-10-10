import { Component, OnInit } from '@angular/core';
import {Person} from './shared/person';
import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PersonService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  //persons : Array<Person> = [new Person(1,"Tester"), new Person(2, "Maxi")];
  users : Array<Person> = [];

  constructor(private personService : PersonService) {}

  ngOnInit() {
    this.getUsers();
    console.log(this.users);
  }

  getUsers () {
    this.personService.getUsers().subscribe(users => this.users = users);
  }
}
