import { Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
  } from '@angular/core';

@Component({
  selector: 'app-std-board',
  template: require('./student-dash-board.html'),
  styleUrls: ['./stdDashBoard.scss']
})
export class StudentBoardComponent {
  title = 'Welcome to School-Book-Now';
}
