import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {}

  getLeagues(screen: string, country: string) {
    this.selectedScreen = screen;
    this.selectedCountry = country;
    this.footballService.getLeagues().subscribe((res) => {
      console.log(res);
    });
  }
}
