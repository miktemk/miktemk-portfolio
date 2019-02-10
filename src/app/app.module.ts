import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2StateDeclaration, UIRouterModule, UIRouter } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VidkaEditorPageComponent } from './proj/vidka-editor-page/vidka-editor-page.component';
import { environment } from 'src/environments/environment';
import { UIRouterJustViewPageComponent } from './common/uirouter-justview-page.component';


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
  {
    name: 'proj.vidka',
    url: '/vidka',
    component: VidkaEditorPageComponent,
  },
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
    UIRouterModule.forRoot({
      states: uiRouterStates,
      useHash: true,
      otherwise: { state: 'externalarea.signin' },
      config: uiRouterConfigFn
    }),
  ],
  declarations: [
    AppComponent,
    TileComponent,
    UIRouterJustViewPageComponent,
    HomePageComponent,
    VidkaEditorPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
