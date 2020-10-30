import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements AfterViewInit {
  @ViewChild('undo')
  undo: ElementRef<HTMLButtonElement>;
  @ViewChild('redo')
  redo: ElementRef<HTMLButtonElement>;

  constructor(public dataService: DataService) {
  }

  ngAfterViewInit(): void {
  }
}
