import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2StateDeclaration, UIRouterModule, UIRouter } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';
import { MarkdownModule } from 'ngx-markdown';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { environment } from 'src/environments/environment';
import { UIRouterJustViewPageComponent } from './common/uirouter-justview-page.component';
import { GenericMarkdownPageComponent } from './generic-markdown-page/generic-markdown-page.component';
import { MyAppRouteData } from './common/my-app-route-data';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
  ..._.map([
    'vidka',
    'image-harvester',
    'image-animator',
    'tts-browser',
    'tts-book-reader',
    'tts-utility',
    'audio-booker',
  ], atom => <Ng2StateDeclaration>{
    name: `proj.${atom}`,
    url: `/${atom}`,
    component: GenericMarkdownPageComponent,
    data: <MyAppRouteData> { mdDocument: `assets/md-pages/${atom}.md` }
  }),
];

export function uiRouterConfigFn(uiRouter: UIRouter) {
  if (!environment.production) {
    // uiRouter.trace.enable(Category.TRANSITION);
    // uiRouter.trace.enable(Category.RESOLVE);
    uiRouter.plugin(Visualizer);
  }
}




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({
      states: uiRouterStates,
      useHash: true,
      otherwise: { state: 'externalarea.signin' },
      config: uiRouterConfigFn
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
