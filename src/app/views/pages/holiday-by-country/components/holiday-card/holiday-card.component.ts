import { Component, Input, OnInit } from '@angular/core';
import { Holiday } from 'src/app/domain/models/holiday';

@Component({
  selector: 'app-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss'],
})
export class HolidayCardComponent implements OnInit {
  @Input() holiday: Holiday;

  constructor() { }

  ngOnInit() { }

}
