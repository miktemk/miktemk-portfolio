import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { mdRoute, uiRouterConfigFn_addVisualizer } from './common/route-helpers';
import { UIRouterJustViewPageComponent } from './common/uirouter-justview-page.component';
import { GenericMarkdownPageComponent } from './generic-markdown-page/generic-markdown-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TileComponent } from './tile/tile.component';


const uiRouterStates: Ng2StateDeclaration[] = [
  {
    name: 'home',
    url: '',
    component: HomePageComponent,
  },
  {
    name: 'proj',
    url: '',
    abstract: true,
    component: UIRouterJustViewPageComponent,
  },
  mdRoute('vidka'),
  mdRoute('image-harvester'),
  mdRoute('image-animator'),
  mdRoute('tts-browser'),
  mdRoute('tts-book-reader'),
  mdRoute('tts-utility'),
  mdRoute('audio-booker'),
];


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      states: uiRouterStates,
      useHash: true,
      otherwise: { state: 'externalarea.signin' },
      config: uiRouterConfigFn_addVisualizer
    }),
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [
    AppComponent,
    TileComponent,
    UIRouterJustViewPageComponent,
    HomePageComponent,
    GenericMarkdownPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
