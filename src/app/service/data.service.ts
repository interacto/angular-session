import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  text: string;
  color: string;
  position: Position;

  constructor() {
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    this.color = '#929292';
    this.position = {
      x: 20,
      y: 10
    };
  }

  setNewRandomColor(): void {
    // tslint:disable-next-line:no-bitwise
    this.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  }
}

export interface Position {
  x: number;
  y: number;
}
