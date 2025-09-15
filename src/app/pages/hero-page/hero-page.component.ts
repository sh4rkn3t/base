import { Component, signal } from '@angular/core';
import { upperCase } from '../../shared/pipes/upperCase.pipe'

@Component({
  selector: 'heroPageComponent',
  imports: [upperCase],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
  
export class heroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(name: string, age: number) {
  return `${name} - ${age}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }




}
