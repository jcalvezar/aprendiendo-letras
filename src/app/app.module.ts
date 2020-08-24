import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LetrasPage } from '../pages/letras/letras';
import { NumerosPage } from '../pages/numeros/numeros';
import { ServicesAudioProvider } from '../providers/services-audio/services-audio';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
		LetrasPage,
		NumerosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
		LetrasPage,
		NumerosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
		NativeAudio,
		ServicesAudioProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
