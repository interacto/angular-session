import {AfterViewInit, Component} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
    selector: 'app-tp2',
    templateUrl: './tp2.component.html',
    styleUrls: ['./tp2.component.css']
})
export class Tp2Component implements AfterViewInit {
    constructor(public dataService: DataService) {
    }

    ngAfterViewInit(): void {
    }
}
