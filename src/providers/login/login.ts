import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
	message: string = '';
	constructor(
		public http: HttpClient,
		public afAuth: AngularFireAuth,
		public alertCtrl: AlertController
	) {
		console.log('Hello LoginProvider Provider');
	}

	/**
	 * Metodo que llama la función 'signInWithEmailAndPassword' 
	 * enviando los dos parametros correspondientes para validar
	 * si el usuario existe en la BD de Firebase.
	 * En caso de que no exista o que halla algun error, se mostrara
	 * en pantalla un Alert con el problema que hubo.
	 * @param email Email del usuario que quiere logearse.
	 * @param password Contraseña del usuario que quiere logearse.
	 */
	login(email: string, password: string): void {
		this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
			(usuario) => {},
			(error) => {
				this.message = error.message;
				let alert = this.alertCtrl.create({
					title: '¡  :(  !',
					subTitle: this.message,
					buttons: [ 'OK' ]
				});
				alert.present();
			}
		);
	}
}
