import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RibittDialogBodyComponent } from './ribitt-dialog-body/ribitt-dialog-body.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'portfolio';

  constructor(public dialog: MatDialog) {}

  public openRibittDialog() {
    const dialogRef = this.dialog.open(RibittDialogBodyComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
