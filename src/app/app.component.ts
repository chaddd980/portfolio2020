import { Component, HostListener } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RibittDialogBodyComponent } from './ribitt-dialog-body/ribitt-dialog-body.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent {
  public lastScroll = 0;
  public scrollUp: any;
  public scrollDown: any;
  public title = 'portfolio';
  public first = false;

  constructor(public dialog: MatDialog, private window: Window) {}

  public openRibittDialog() {
    // const dialogRef = this.dialog.open(RibittDialogBodyComponent);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  public onNavigate() {
    setTimeout(() => {
      console.log(window.location);
      const uri = window.location.toString();
      if (uri.indexOf('#') > 0) {
          const cleanUri = uri.substring(0, uri.indexOf('#'));
          window.history.replaceState({}, document.title, cleanUri);
          console.log('hi');
      }
    }, 1000);
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: any) {
    // console.log(event.path[1]);
    // console.log(event.path[1].pageYOffset);
    const currentScroll = event.path[1].pageYOffset;
    // console.log('current scroll is ' + currentScroll);
    // console.log('last scroll is ' + this.lastScroll);
    // console.log('scroll down is ' + this.scrollDown);
    // console.log('scroll up is ' + this.scrollUp);
    if (currentScroll > 0 ) {
      this.scrollUp = false;
    }
    if (currentScroll > this.lastScroll && !this.scrollDown) {
      if (this.first) {
        this.scrollDown = true;
        this.scrollUp = false;
        // console.log('scroll down is ' + this.scrollDown);
        // console.log('scroll up is ' + this.scrollUp);
      }
      this.first = true;
    } else if (currentScroll < this.lastScroll && this.scrollDown) {
      this.scrollDown = false;
      this.scrollUp = true;
      // console.log('scroll down is ' + this.scrollDown);
      // console.log('scroll up is ' + this.scrollUp);
    }
    this.lastScroll = currentScroll;
  }

}
