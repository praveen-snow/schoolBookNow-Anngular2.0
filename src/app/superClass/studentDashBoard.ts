import { Component } from '@angular/core';

@Component({
  selector: 'app-std-board',
  template: require('../components/stdDashBoard/stdDashBoard.html'),
  styleUrls: ['../components/stdDashBoard/stdDashBoard.scss']
})
export class studentBoardComponent {
  title = 'Welcome to School-Book-Now';
}
