import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { testcomponent } from './component/testComponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    testcomponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
