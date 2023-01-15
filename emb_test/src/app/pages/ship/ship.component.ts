import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipService } from 'src/app/services/ship.service';
import { Ship } from 'src/types';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss'],
})
export class ShipComponent implements OnInit {
  ship!: Observable<Ship>;
  shipid:number
  offset:number

  constructor(private shipServ: ShipService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.shipid =parseInt( this.route.snapshot.paramMap.get('id'));
    this.offset = parseInt(this.route.snapshot.paramMap.get('page'));

    this.ship = this.shipServ.getShipById(this.offset, this.shipid);
  }

  ngOnChanges(){
    console.log('changed')
    this.ship = this.shipServ.getShipById(this.offset, this.shipid);
  }
}
