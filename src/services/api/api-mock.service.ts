import { Cat } from '../../models/types';
import { Injectable } from '@angular/core';
import { API_ABSTRACT } from './api.abstract';

const service_string : string = 'Mock Service';


@Injectable()
export class ApiMockService implements API_ABSTRACT {
  
   Cats : Cat[] = [
    { name: 'Butch', age: 11, gender: 'male' },
    { name: 'Luna', age: 6, gender: 'female' },
    { name: 'Sam', age: 12, gender: 'other'}
  ]

  constructor() {}
  
  public getApiData(): Cat[] {
      console.log(`${service_string}`)
      return this.Cats
  }
}
