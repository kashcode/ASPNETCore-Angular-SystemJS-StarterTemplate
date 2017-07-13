import { DataService } from './../../../core/services/values-data.service';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { LoadingBarService } from 'ng2-loading-bar';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    dateFrom: moment.Moment = moment().add(-2, 'd');
    dateFromOptions: any = {
        format: "DD.MM.YYYY."
    };

    constructor(private _dataService: DataService,
        private _toasterService: ToasterService,
        private _slimLoadingBarService: LoadingBarService) {

        this.message = 'Hello from HomeComponent constructor ';
    }

    ngOnInit() {
        console.log(moment());
        this._slimLoadingBarService.start();

        this._dataService
            .GetAll()
            .subscribe((data: any) => this.values = data,
            (error: any) => console.log(error),
            () => {
                this._toasterService.pop('success', 'Complete', 'Getting all values complete');
                this._slimLoadingBarService.complete();
            });
    }

    dateFromChange(date) {
        this.dateFrom = date;
    }

    dateFromClick() {
        console.log('click click!')
    }
}
