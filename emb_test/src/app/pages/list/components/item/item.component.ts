import { Component, Input, OnInit } from '@angular/core';
import { Ship } from 'src/types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() ship!:Ship
  @Input() offset!:number
  @Input() shipid!:number

  constructor() { }

  ngOnInit(): void {

  }

}
