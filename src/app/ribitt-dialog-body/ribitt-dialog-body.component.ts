import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'app-ribitt-dialog-body',
  styleUrls: ['./ribitt-dialog-body.component.scss'],
  templateUrl: './ribitt-dialog-body.component.html',
})
export class RibittDialogBodyComponent implements OnInit {
  public type: any;
  public supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  public supportsPassiveEventListeners = supportsPassiveEventListeners();
  public supportsScrollBehavior = supportsScrollBehavior();
  public mobile: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public platform: Platform) { }

  public ngOnInit(): void {
    console.log(this.data);
    this.type = this.data.info;
    if (this.platform.IOS === true || this.platform.ANDROID === true) {
      this.mobile = true;
    }
  }

}
