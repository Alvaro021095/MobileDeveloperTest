import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the CreateAccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreateAccountProvider {
	message: string = '';
	messagew: string = 'Una cadena normal';
	constructor(
		public http: HttpClient,
		private db: AngularFirestore,
		public afAuth: AngularFireAuth,
		public alertCtrl: AlertController
	) {}
	/**
	 * Metodo que permite crear una cuenta para el usuario y luego
	 * agregar a la colección 'Users' los datos de este usuario.
	 * En caso de que no se pueda agregar, se mostrara un Alert
	 * en pantalla con el problema que hubo.
	 * @param email: Email del usuario (unico).
	 * @param password: Contrasenia del usuario.
	 */
	createAccount(email: string, password: string): void {
		this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
			(usuario) => {
				const id = this.db.createId();
				this.db.collection('Users').doc(id).set({ id, email, password });
				let alert = this.alertCtrl.create({
					title: 'Congratulations!',
					subTitle: 'You have created your account!',
					buttons: [ 'OK' ]
				});
				alert.present();
			},
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
