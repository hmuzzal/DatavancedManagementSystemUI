import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    templateUrl: './loading.spinner.component.html',
    styleUrls: ['./loading.spinner.component.css'],
})
export class LoadingSpinnerComponent {
    get staticSpinnerCanShow() {
        return LoadingSpinnerComponent.spinnerCanShow;
    }
    static spinnerCanShow: boolean;

    @Input('spinner-text') spinnerText = 'loading please wait...';
    @Input('spinner-imageUrl') spinnerImageUrl = '../../../../assets/img/spin3.gif';

    show() {
        LoadingSpinnerComponent.spinnerCanShow = true;
    }
    hide() {
        LoadingSpinnerComponent.spinnerCanShow = false;
    }

}
