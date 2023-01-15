import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RocketsService } from 'src/app/services/rockets.service';
import { Rocket } from 'src/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  indexPage:number = 3
  rockets!:Observable<Rocket>

  constructor(private rockServ: RocketsService){
  }

  ngOnInit(){
    this.rockets = this.rockServ.getAllRockets(this.index)
  }


  nextPage(){
     this.indexPage++
     this.updatePage()
  }

  prevPage(){
   this.indexPage--
    this.updatePage()
  }

  get index(){
    return this.indexPage
  }

  updatePage(){
    this.rockets = this.rockServ.getAllRockets(this.index)

  }

}
