import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StandingsStandings } from '../interface';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  host: { 'collision-id': 'StandingsComponent' },
})
export class StandingsComponent implements OnInit {
  standings: StandingsStandings[] = [];
  @Input() set standingsStandings(val: StandingsStandings[]) {
    this.standings = val;
  }

  constructor() {}

  ngOnInit(): void {}
}
