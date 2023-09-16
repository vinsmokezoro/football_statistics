import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: { 'collision-id': 'DashboardComponent' },
})
export class DashboardComponent implements OnInit {

  countries: string[] = ['England', 'Spain', 'France', 'Germany', 'Italy'];

  constructor() {}

  ngOnInit(): void {
  }
}
