import { Component } from '@angular/core';
import { UIRouter, Transition } from '@uirouter/angular';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const CurYear = new Date().getFullYear();

@Component({
  selector: 'mik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  copyrightYear: number = CurYear;

  private transitionServiceOnSuccess$sub: Function;

  constructor(
    private uiRouter: UIRouter,
    private $gaService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    this.transitionServiceOnSuccess$sub = this.uiRouter.transitionService.onSuccess({}, (uiTrans: Transition) => {
      this.$gaService.pageView(uiTrans.to().url, uiTrans.to().url)
    })
  }

  ngOnDestroy() {
    this.transitionServiceOnSuccess$sub();
  }
}
