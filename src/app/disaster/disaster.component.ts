import { Component, OnInit } from '@angular/core';

import { disaster } from '../disaster';
import { DISASTER } from '../mock-disaster';


@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})
export class DisasterComponent implements OnInit {

  dist = DISASTER;
  
  selectDisaster?: disaster;
  onSelect(disaste:disaster): void{
    this.selectDisaster = disaste;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
