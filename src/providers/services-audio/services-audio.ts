import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular'; 
import { NativeAudio } from '@ionic-native/native-audio';

interface Sound {
  key: string;
  asset: string;
  isNative: boolean
}

/*
  Generated class for the ServicesAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesAudioProvider {

  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio: boolean = true;
	
  constructor(private platform: Platform, private nativeAudio: NativeAudio) {
    console.log('Hello ServicesAudioProvider Provider');
  }

	preload(key: string, asset: string): void {

    if(this.platform.is('cordova') && !this.forceWebAudio){

      this.nativeAudio.preloadSimple(key, asset);

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: true
      });

    } else {

      //let audio = new Audio();
      //audio.src = asset;

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: false
      });

    }

  }

  play(key: string): void {

    let soundToPlay = this.sounds.find((sound) => {
      return sound.key === key;
    });

    if(soundToPlay.isNative){

      this.nativeAudio.play(soundToPlay.asset).then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    } else {

      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();

    }
  }
}
