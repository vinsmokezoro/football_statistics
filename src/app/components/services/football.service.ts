import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StandingsStandings } from '../interface';

@Injectable()
export class FootballService {
  selectedCountry: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  getLeagues() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-apisports-key',
      '7a5f7ed888850c01d305c25fc4686d88'
    );

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

  getStandings() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-apisports-key',
      '7a5f7ed888850c01d305c25fc4686d88'
    );

    let requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };

    return this.http.get(
      'https://v3.football.api-sports.io/standings?league=39&season=2023',
      requestOptions
    );
  }
}
