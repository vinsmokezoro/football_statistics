import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FootballService {
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  getLeagues() {
    return this.http.get("https://v3.football.api-sports.io/leagues");
  }
}
