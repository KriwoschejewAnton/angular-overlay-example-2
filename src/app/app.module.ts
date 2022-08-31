import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OverlayModule} from '@angular/cdk/overlay';
import {CdkOverlayBasicExample} from './cdk-overlay-basic-example';

@NgModule({
  declarations: [CdkOverlayBasicExample],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [CdkOverlayBasicExample],
})
export class AppModule {}
