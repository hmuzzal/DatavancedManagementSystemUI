import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

    private appSettings: any;

    constructor(private http: HttpClient) {
        this.loadAppSettings();
    }

    loadAppSettings() {
        return this.http.get('/assets/appsettings.json')
            .subscribe(data => {
                this.appSettings = data;
            });
    }

    get apiBaseUrl() {
        if (!this.appSettings) {
            throw Error('Config file not loaded!');
        }
        return this.appSettings.apiUrl;
    }

    get appConfig() {
        if (!this.appSettings) {
            return null;
        }
        return this.appSettings;
    }
}
