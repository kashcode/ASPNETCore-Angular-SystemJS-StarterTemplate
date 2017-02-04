import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { HttpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { LoadingBarModule } from "ng2-loading-bar";

@NgModule({
    imports: [
        BrowserModule,
        AppRouting,
        HttpModule,
        ToasterModule,
        LoadingBarModule,
        SharedModule,
        AboutModule,
        HomeModule
    ],

    declarations: [
        AppComponent,
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
