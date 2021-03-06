import { Ng2StateDeclaration, UIRouter } from '@uirouter/angular';
import { Visualizer } from '@uirouter/visualizer';
import { environment } from 'environments/environment';

import { GenericMarkdownPageComponent } from 'app/generic-markdown-page/generic-markdown-page.component';

import { MyAppRouteData } from './my-app-route-data';


export function mdRoute(atom: string, title: string, githubId?: string, downloadUrl?: string): Ng2StateDeclaration {
  return <Ng2StateDeclaration>{
    name: `proj.${atom}`,
    url: `/${atom}`,
    component: GenericMarkdownPageComponent,
    data: <MyAppRouteData> {
      title: title,
      mdDocument: `assets/md-pages/${atom}.md`,
      githubRepo: githubId,
      downloadUrl: downloadUrl
    }
  };
}

export function uiRouterConfigFn_addVisualizer(uiRouter: UIRouter) {
  if (!environment.production) {
    // uiRouter.trace.enable(Category.TRANSITION);
    // uiRouter.trace.enable(Category.RESOLVE);
    uiRouter.plugin(Visualizer);
  }
}