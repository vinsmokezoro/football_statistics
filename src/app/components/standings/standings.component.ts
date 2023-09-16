import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  host: { 'collision-id': 'StandingsComponent' },
})
export class StandingsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
