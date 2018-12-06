import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  value: string;
  type: string;

  @Output() OnGoingTraining = new EventEmitter();

  typeOfSports = [{value: 0, type: 'Gym'}, {value: 1, type: 'Run'}, {value: 2, type: 'Coletive'},
                  {value: 4, type: 'Individual'}];

  constructor() { }

  ngOnInit() {
  }

  goingTraining() {
    this.OnGoingTraining.emit();
  }

}
