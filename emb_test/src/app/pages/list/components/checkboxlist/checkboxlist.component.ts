import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxlist',
  templateUrl: './checkboxlist.component.html',
  styleUrls: ['./checkboxlist.component.scss']
})
export class CheckboxlistComponent implements OnInit {
  @Input() list :string[]

  constructor() { }

  ngOnInit(): void {
  }

}
