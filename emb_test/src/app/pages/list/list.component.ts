import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { RocketsService } from 'src/app/services/rockets.service';
import { Rocket, Ship } from 'src/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  indexPage: number = 3;
  rocket!: Observable<Rocket>;
  listOfTypes!: string[];
  listOfPorts!: string[];

  constructor(private rockServ: RocketsService) {}

  ngOnInit() {
    this.rocket = this.rockServ.getAllRockets(this.index);
    this.getFilters();
  }

  getFilters() {
    this.rocket.subscribe((e) => {
      this.listOfPorts = [... new Set( e.ships.map((e) => e.home_port))];
      this.listOfTypes = [... new Set(e.ships.map((e) => e.type))];
    });
  }

  nextPage() {
    this.indexPage++;
    this.updatePageAndFilter();
  }

  prevPage() {
    this.indexPage--;
    this.updatePageAndFilter();
  }

  get index() {
    return this.indexPage;
  }

  updatePage() {
    this.rocket = this.rockServ.getAllRockets(this.index);
  }

  updatePageAndFilter() {
    this.updatePage();
    this.getFilters();
  }
}
