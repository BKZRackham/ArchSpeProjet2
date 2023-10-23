import { Injectable } from '@angular/core';
import { OptionsRepository } from './options-repository';
import {Option} from '../data/option';

@Injectable({
  providedIn: 'any'
})
export class OptionsRepositoryDummyImplService extends OptionsRepository{
  
  public get types():Option[] {
    return [
      {name : "Car", cost: 0},
      {name : "Motorbike", cost: 0},
      {name : "Hovercraft", cost: 50}
    ]
  }

  public get tires():Option[] {
    return [
      {name : "Hard", cost: 0},
      {name : "Soft", cost: 30}
    ]
  }
  public get extras():Option[] {
    return [
      {name : "Nitro(10 units)", cost: 100},
      {name : "Spoiler", cost: 200}
    ]
  }

  
}
