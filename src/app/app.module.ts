import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { DecimalBrPipe } from '../pipes/decimal-br/decimal-br'

/* LocalStorage */
import { LocalStorageModule } from 'angular-2-local-storage';

// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': '81d1d2f1'
//   }
// };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
