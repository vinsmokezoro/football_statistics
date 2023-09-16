import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: { 'collision-id': 'DashboardComponent' },
})
export class DashboardComponent implements OnInit {

  countries: string[] = ['England', 'Spain', 'France', 'Germany', 'Italy'];

  constructor(private router: Router,
    private footballService: FootballService) {}

  ngOnInit(): void {
  }

  routeToStandings(country: string) {
    this.footballService.selectedCountry = country;
    this.router.navigate(['/dashboard/standings']);
  }
}
