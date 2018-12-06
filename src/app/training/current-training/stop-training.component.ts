import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-training',
  template: `<h1 mat-dialog-title>You wanna stop your training?</h1>
            <mat-dialog-actions>
              <button mat-button >YES</button>
              <button mat-button >NO</button>
            </mat-dialog-actions>
            `
})
export class StopTrainingComponent {

}
