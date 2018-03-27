import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    Batchservice1000SharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        Batchservice1000SharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        Batchservice1000SharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class Batchservice1000SharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
