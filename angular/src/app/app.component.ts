import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  generateRandomArray() {
    const arrayLength = 20;
    return Array.from({ length: arrayLength }, () =>
      Math.floor(Math.random() * 100)
    );
  }

  width = 200;
  height = 50;
  lineColor = '#2220a4';
  bgColor = '#191919';
  serie = this.generateRandomArray();
}
