import { HomeComponent } from './components/home/home.component';
import { HomeRoutes } from './home.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A2EDateTimePickerModule } from '../shared/ng2-eonasdan-datetimepicker/src/datetimepicker.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        HomeRoutes,
        A2EDateTimePickerModule
    ],

    declarations: [
        HomeComponent
    ],

    exports: [
        HomeComponent
    ]
})

export class HomeModule { }