export interface LeaguesResponse {
  get?: string;
  parameters?: [];
  errors?: [];
  results?: number;
  paging?: Paging;
  response?: LeagueData[];
}

export interface Paging {
  current: number;
  total: number;
}

export interface LeagueData {
  league: League;
  country: LeagueCountry;
  seasons: LeagueSeasons[];
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface LeagueCountry {
  name: string;
  code: string;
  flag: string;
}

export interface LeagueSeasons {
  year: number;
  start: string;
  end: string;
  current: string;
  coverage: Coverage;
}

export interface Coverage {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface StandingsResponse {
  league?: StandingsLeague;
}

export interface StandingsLeague {
  id?: number;
  name?: string;
  country?: string;
  logo?: string;
  flag?: string;
  season?: number;
  standings?: StandingsStandings[];
}

export interface StandingsStandings {
  rank?: number;
  team?: StandingsTeam;
  points?: number;
  goalsDiff?: number;
  group?: string;
  form?: string;
  status?: string;
  description?: string;
  all?: StandingsAll;
  home?: StandingsHome;
  away?: StandingsAway;
  update?: string;
}

export interface StandingsTeam {
  id?: number;
  name?: string;
  logo?: string;
}

export interface StandingsAll {
  played?: number;
  win?: number;
  draw?: number;
  lose?: number;
  goals?: StandingsAllGoals;
}

export interface StandingsAllGoals {
  for?: number;
  against?: number;
}

export interface StandingsHome {
  played?: number;
  win?: number;
  draw?: number;
  lose?: number;
  goals?: StandingsHomeGoals;
}

export interface StandingsHomeGoals {
  for?: number;
  against?: number;
}

export interface StandingsAway {
  played?: number;
  win?: number;
  draw?: number;
  lose?: number;
  goals?: StandingsAwayGoals;
}

export interface StandingsAwayGoals {
  for?: number;
  against?: number;
}
