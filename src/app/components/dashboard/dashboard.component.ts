import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LeagueData,
  LeagueSeasons,
  LeaguesResponse,
  StandingsResponse,
  StandingsStandings,
} from '../interface';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: { 'collision-id': 'DashboardComponent' },
})
export class DashboardComponent implements OnInit {
  countries: string[] = ['England', 'Spain', 'France', 'Germany', 'Italy'];
  selectedScreen: string = '';
  selectedCountry: string = '';
  selectedLeagueId: number = 0;
  leagueResponse: LeaguesResponse = {};
  currentSeason: number = 0;
  currentLeagueDataIndex: number = 0;
  standingsResponse: StandingsResponse = {};
  standingsStandings: StandingsStandings[];
  standings: StandingsStandings[];

  constructor(
    private router: Router,
    private footballService: FootballService
  ) {
    this.standingsStandings = [];
    this.standings = [];
  }

  ngOnInit(): void {}

  getLeagues(screen: string, country: string) {
    this.selectedScreen = '';
    this.selectedCountry = country;
    this.footballService.getLeagues().subscribe((res: LeaguesResponse) => {
      this.leagueResponse = res;
      res.response?.forEach(
        (leagueData: LeagueData, leagueDataIndex: number) => {
          leagueData.seasons.forEach(
            (season: LeagueSeasons, seasonIndex: number) => {
              if (season.current) {
                this.currentLeagueDataIndex = leagueDataIndex;
                this.currentSeason = season.year;
              }
            }
          );
          if (leagueData.country.name === country) {
            this.selectedCountry = country;
            this.selectedLeagueId = leagueData.league.id;
          }
        }
      );
    });
    this.getStandings(screen);
  }

  getStandings(screen: string) {
    this.footballService.getStandings().subscribe((res: StandingsResponse) => {
      //using any because
      //Element implicitly has an 'any' type because expression of type '0' can't be used to index type //'StandingsResponse'.
      //Property '0' does not exist on type 'StandingsResponse'
      this.standingsResponse = res;
      if (this.standingsResponse?.response) {
        this.standingsResponse?.response[0]?.league?.standings?.forEach(
          (entry: StandingsStandings) => {
            this.standingsStandings.push(entry);
          }
        );
        if (this.standingsStandings.length) {
          this.standings = this.standingsStandings;
          this.selectedScreen = screen;
        }
      }
    });
  }
}
