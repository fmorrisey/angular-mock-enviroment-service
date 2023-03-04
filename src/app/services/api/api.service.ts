import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_ABSTRACT } from './api.abstract';
import { Cat } from '../../../models/types';

const service_string : string = 'Production Service';

@Injectable()
export class ApiService implements API_ABSTRACT {
  
   Cats : Cat[] = [
    { name: 'Charlie-Beans', age: 1, gender: 'male' },
    { name: 'Sammy-Red', age: 6, gender: 'male' },
    { name: 'Buster', age: 12, gender: 'other'}
  ]

  constructor() {}
  
  public getApiData(): Cat[] {
      console.log(`${service_string}`)
      return this.Cats
  }
}
