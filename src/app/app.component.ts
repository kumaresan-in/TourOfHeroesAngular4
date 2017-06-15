import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  template: `
             <h1>{{title}}</h1>
             <h2>{{hero.name}}Details !!!</h2>
             <div> <label> id:</label>{{hero.id}} </div>
             <div>
                  <label>name:</label>
                  <input [(ngModel)]="hero.name" placeholder="Name">
             </div>
             `
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}