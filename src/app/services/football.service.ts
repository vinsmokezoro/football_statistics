import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}
}
