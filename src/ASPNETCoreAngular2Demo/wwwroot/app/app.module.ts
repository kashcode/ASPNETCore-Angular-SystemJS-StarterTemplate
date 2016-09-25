import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing, appRoutingProviders } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DataService } from './services/DataService';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule
    ],

    declarations: [AppComponent, HomeComponent, AboutComponent],

    providers: [
        appRoutingProviders,
        Configuration,
        DataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }