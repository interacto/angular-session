import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-tp1',
  templateUrl: './tp1.component.html',
  styleUrls: ['./tp1.component.css']
})
export class Tp1Component implements AfterViewInit {
  @ViewChild('undo')
  undo: ElementRef<HTMLButtonElement>;
  @ViewChild('redo')
  redo: ElementRef<HTMLButtonElement>;

  constructor(public dataService: DataService) {
  }

  ngAfterViewInit(): void {
  }
}
