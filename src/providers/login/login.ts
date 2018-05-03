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
