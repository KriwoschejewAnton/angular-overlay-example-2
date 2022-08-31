import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayExample} from './overlay-example';

@NgModule({
  declarations: [OverlayExample],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [OverlayExample],
})
export class AppModule {}
