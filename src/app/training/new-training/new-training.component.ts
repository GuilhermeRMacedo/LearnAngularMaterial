import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  value: string;
  name: string;

  typeOfSports = [{value: 0, name: 'Gym'}, {value: 1, name: 'Run'}, {value: 2, name: 'Coletive'},
                  {value: 4, name: 'Individual'}];


  constructor() { }

  ngOnInit() {
  }

}
