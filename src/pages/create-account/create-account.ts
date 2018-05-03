import { CreateAccountProvider } from './../../providers/create-account/create-account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-create-account',
	templateUrl: 'create-account.html'
})
export class CreateAccountPage {
	email: string;
	password: string;
	repeatedPassword: string;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public proCreateAcc: CreateAccountProvider
	) {}
	/**
	 * Metodo que envia al provider 'CreateAccount' los siguientes parametros.
	 * @param email Email del usuario.
	 * @param password Contraseña del usuario.
	 * @param repeatedPassword Contraseña repetida para validación.
	 */
	createAccount(email: string, password: string, repeatedPassword: string): void {
		if (email != undefined && password != undefined && repeatedPassword != undefined) {
			if (password === repeatedPassword) {
				this.proCreateAcc.createAccount(email, password);
			} else {
				let alert = this.alertCtrl.create({
					title: 'ERROR!',
					subTitle: 'Passwords do not match!',
					buttons: [ 'OK' ]
				});
				alert.present();
			}
		} else {
			let alert = this.alertCtrl.create({
				title: 'Ups!',
				subTitle: 'Please complete the fields!',
				buttons: [ 'OK' ]
			});
			alert.present();
		}
	}
}
