import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000
    }
  ];

  addCharacter(character: Character):void {
    const newChar: Character = {id: uuid(), ...character}
    this.characters.push(newChar);
  }

  deleteCharacterById(id: string): void {
    console.log(id);
    this.characters =  this.characters.filter(char => char.id !== id);
  }
}