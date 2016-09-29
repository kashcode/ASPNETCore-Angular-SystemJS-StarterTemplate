import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataService';
import { ToasterService } from 'angular2-toaster/angular2-toaster'

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _dataService: DataService, private _toasterService: ToasterService) {
        this.message = "Hello from HomeComponent constructor33";
    }

    ngOnInit() {
        this._dataService
            .GetAll()
            .subscribe(data => this.values = data,
            error => console.log(error),
            () => {
                this._toasterService.pop('success', 'Complete', 'Getting all values complete');
            });
    }
}
