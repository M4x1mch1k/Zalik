import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateInitialNumberService {
  validate_init_number(value: number, limit: number){
    if (value > 3 && value < limit){
      return true
    }else{
      return false
    }
  }
  constructor() { }
}
