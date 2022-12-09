import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { LoadingSpinnerComponent } from './spinner/laoding-spinner.component';
import { AppSettingsService } from '../services/app-settings.service';

@Injectable() export class HttpHelper {
    static numberOfRequest = 0;
    private timeOutTime = 60000;
    private baseUrl = '';
    constructor(
        private httpClient: HttpClient,
        private loadingSpinner: LoadingSpinnerComponent,
        private router: Router,
        private appSettingsService: AppSettingsService,
        private toastr: ToastrService
    ) {
        this.baseUrl = appSettingsService.apiBaseUrl;
    }


    public hideLoader() {
        // HttpHelper.numberOfRequest = 0;
        this.loadingSpinner.hide();
    }

    postHelper(
        url: string,
        obj?: any,
        pageIndex?: any,
        pageSize?: any,
        sortBy?: any,
        sortOrder?: any,
        filterBy?: any
    ): Observable<any> {
        url = this.baseUrl + url;
        HttpHelper.numberOfRequest++;
        if (HttpHelper.numberOfRequest === 1) {
            this.loadingSpinner.show();
        }
        var token = localStorage.getItem('Token') || '';
        var headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: token,
        });

        return this.httpClient
            .post(url, obj, { headers: headers })
            .pipe(timeout(this.timeOutTime))
            .pipe(
                map(
                    (value) => {
                        return value;
                    },
                    (error: any) => {
                        this.handleError(error);
                    }
                )
            )
            .pipe(catchError(this.handleError.bind(this)))
            .pipe(
                finalize(() => {
                    HttpHelper.numberOfRequest--;
                    if (HttpHelper.numberOfRequest === 0) {
                        this.loadingSpinner.hide();
                    }
                })
            );
    }

    postFileHelper(
        url: string,
        obj?: any,
        pageIndex?: any,
        pageSize?: any,
        sortBy?: any,
        sortOrder?: any,
        filterBy?: any
    ): Observable<any> {
        url = this.baseUrl + url;
        HttpHelper.numberOfRequest++;
        if (HttpHelper.numberOfRequest === 1) {
            this.loadingSpinner.show();
        }
        var token = localStorage.getItem('Token') || '';
        var headers = new HttpHeaders({
            //  'Content-Type': 'application/json; charset=utf-8',
            Authorization: token,
        });

        return this.httpClient
            .post(url, obj, { headers: headers })
            .pipe(timeout(this.timeOutTime))
            .pipe(
                map(
                    (value) => {
                        return value;
                    },
                    (error: any) => {
                        this.handleError(error);
                    }
                )
            )
            .pipe(catchError(this.handleError.bind(this)))
            .pipe(
                finalize(() => {
                    HttpHelper.numberOfRequest--;
                    if (HttpHelper.numberOfRequest === 0) {
                        this.loadingSpinner.hide();
                    }
                })
            );
    }

    getHelper(
        url: string,
        pageIndex?: any,
        pageSize?: any,
        sortBy?: any,
        sortOrder?: any,
        filterBy?: any
    ): Observable<any> {
        url = this.baseUrl + url;
        HttpHelper.numberOfRequest++;
        if (HttpHelper.numberOfRequest === 1) {
            this.loadingSpinner.show();
        }
        var token = localStorage.getItem('Token') || '';
        var headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        });

        return this.httpClient
            .get(url, { headers: headers })
            .pipe(timeout(this.timeOutTime))
            .pipe(
                map(
                    (value) => {
                        return value;
                    },
                    (error: any) => {
                        this.handleError(error);
                    }
                )
            )
            .pipe(catchError(this.handleError.bind(this)))
            .pipe(
                finalize(() => {
                    HttpHelper.numberOfRequest--;
                    if (HttpHelper.numberOfRequest === 0) {
                        this.loadingSpinner.hide();
                    }
                })
            );
    }


    handleError(error: any) {
        let errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        if (HttpHelper.numberOfRequest == 1) {
            if (error.status == 401) {
                this.toastr.error(
                    'Sorry, Invalid User Name or Password, Please Log in again'
                );
                localStorage.clear();
                this.router.navigate(['/login']);
            } else if (error.status == 406) {
                this.toastr.error(
                    'You have no permission for this action'
                );
            } else if (error.message == 'Timeout has occurred') {
                this.toastr.error('response time out');
            } else {
                this.toastr.error('error connection');
            }
        }
        return throwError(() => new Error(errMsg))
    }
}
