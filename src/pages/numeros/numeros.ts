import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesAudioProvider } from '../../providers/services-audio/services-audio';

/**
 * Generated class for the NumerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-numeros',
  templateUrl: 'numeros.html',
})
export class NumerosPage {

	letras: string[] = [];
	actual: string = '';
	
  constructor(private audio: ServicesAudioProvider, public navCtrl: NavController, public navParams: NavParams) {

		for(let i=0; i<18; i++) {
			this.letras.push( i.toString() );
		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LetrasPage');
		this.letras.forEach( (letra) => {
			this.audio.preload(letra, 'assets/sonidos/j-'+letra+'.mp3');
		});
		
		//this.audio.preload('ok', 'assets/sonidos/muybien.mp3');
		//this.audio.preload('error', 'assets/sonidos/teequivocaste.mp3');
  }
	
	play() {
		let indice = Math.floor(Math.random() * this.letras.length);
		this.actual = this.letras[indice];
		
		console.log('Play... '+indice+' - '+this.actual);
		this.audio.play(this.actual);
	}
	
	verificar(letra) {
		console.log(letra);
		
		if (this.actual == letra) {
			console.log('OK');
			this.audio.play('ok');
		} else {
			console.log('ERROR');
			this.audio.play('error');
		}
	}

}
