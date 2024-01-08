import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  changeName(value: string):void {
    this.name = value;
  }

  changeAge(value: number): void {
    this.age = value;
  }

  resetForm(): void {
    this.name = 'ironman'
    this.age = 45;
  }

  get capitalicedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }
}
