import { Component } from '@angular/core'

@Component({
    selector : 'pm-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    pageTitle: string = "ACME Product Management";
    title: string = "ACME ProdMgr2.0";
}