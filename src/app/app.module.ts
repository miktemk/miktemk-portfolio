import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2StateDeclaration, UIRouterModule } from '@uirouter/angular';
import { MarkdownModule } from 'ngx-markdown';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';

import { AppComponent } from './app.component';
import { mdRoute, uiRouterConfigFn_addVisualizer } from './common/route-helpers';
import { UIRouterJustViewPageComponent } from './common/uirouter-justview-page.component';
import { GenericMarkdownPageComponent } from './generic-markdown-page/generic-markdown-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TileComponent } from './tile/tile.component';
import { MyAppRouteData } from './common/my-app-route-data';


const uiRouterStates: Ng2StateDeclaration[] = [
  {
    name: 'home',
    url: '',
    component: HomePageComponent,
  },
  {
    name: 'about',
    url: `/about`,
    component: GenericMarkdownPageComponent,
    data: <MyAppRouteData> {
      mdDocument: `assets/md-pages/about.md`,
    }
  },
  {
    name: 'proj',
    url: '',
    abstract: true,
    component: UIRouterJustViewPageComponent,
  },
  mdRoute('vidka', 'Vidka Video Editor', 'VidkaEditor', 'https://github.com/miktemk/VidkaEditor/releases/download/1.0.0/VidkaVideoEditor.zip'),
  mdRoute('image-harvester', 'Image Harvester'),
  mdRoute('image-animator', 'Image Animator'),
  mdRoute('tts-browser', 'Text-to-Speech Browser', 'TextToSpeechBrowser', 'https://github.com/miktemk/TextToSpeechBrowser/releases/download/1.0.0/TtsBrowser.7z'),
  mdRoute('tts-book-reader', null, 'TextToSpeechAudiobookReader'),
  mdRoute('tts-utility', 'Text-to-Speech Utility', 'TextToSpeechUtility', 'https://github.com/miktemk/TextToSpeechUtility/releases/download/1.0.0/TextToSpeechUtility.zip'),
  mdRoute('audio-booker', 'Audio booker', 'AudioBooker', 'https://github.com/miktemk/AudioBooker/releases/download/1.0.0/AudioBooker.zip'),
  mdRoute('ae-syntax-editor', 'Avalon Edit XSHD Syntax Highlight Editor', 'AvalonEditSyntaxHighlightEditor', 'https://github.com/miktemk/AvalonEditSyntaxHighlightEditor/releases/download/1.0.0/AvalonEditSyntaxHighlightEditor.zip'),
  mdRoute('prolog-ide', 'Prolog IDE', 'CSharpPrologIDE', 'https://github.com/miktemk/CSharpPrologIDE/releases/download/1.0.2/CSharpPrologIDE.zip'),
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
    NtkmeButtonModule,
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
