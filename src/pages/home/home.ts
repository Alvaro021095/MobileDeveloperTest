// import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	email: string;
	password: string;
	constructor(
		public navCtrl: NavController,
		public proLogin: LoginProvider,
		public alertCtrl: AlertController
	) {}
	/**
	 * Metodo que envia al provider 'Login' los siguientes
	 * parametros.
	 * @param email Email del usuario que quiere logearse a la APP.
	 * @param password Contraseña del usuario.
	 */
	login(email: string, password: string) {
		if (email != undefined && password != undefined) {
			this.proLogin.login(email, password);
		} else {
			let alert = this.alertCtrl.create({
				title: 'Ups!',
				subTitle: 'Please complete the fields!',
				buttons: [ 'OK' ]
			});
			alert.present();
		}
	}
	goToPageCreateAccount() {
		this.navCtrl.push('CreateAccountPage');
	}
}
