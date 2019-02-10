import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mik-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit {

  @Input()
  url: string;

  @Input()
  title: string;

  @Input()
  image: string;

  constructor() { }

  ngOnInit() {
  }

}
