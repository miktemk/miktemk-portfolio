import { Component, OnInit } from '@angular/core';
import { Transition } from '@uirouter/angular';
import { MyAppRouteData } from '../common/my-app-route-data';

@Component({
  selector: 'mik-generic-markdown-page',
  templateUrl: './generic-markdown-page.component.html',
  styleUrls: ['./generic-markdown-page.component.less']
})
export class GenericMarkdownPageComponent implements OnInit {

  title: string;
  document: string;

  constructor(
    private uiTrans: Transition,
  ) { }

  ngOnInit() {
    // BUG: the <markdown> control blinks because it takes a second to load the document. Better to do with a resolve
    let routeData = this.uiTrans.to().data as MyAppRouteData;
    this.title = routeData.title;
    this.document = routeData.mdDocument;
  }
  
}
