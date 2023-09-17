import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FootballService {
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  getLeagues() {
    let headers = new Headers();
    headers.append('x-apisports-key', 'e9f3be4772ad538bb9f5afd81a9e98a4');

    let requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };

    return this.http.get(
      'https://v3.football.api-sports.io/leagues',
      requestOptions
    );
  }
}
