import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radiolist',
  templateUrl: './radiolist.component.html',
  styleUrls: ['./radiolist.component.scss']
})
export class RadiolistComponent implements OnInit {
  @Input() list :any

  constructor() { }

  ngOnInit(): void {
  }

}
