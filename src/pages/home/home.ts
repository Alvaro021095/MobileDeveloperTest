import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	email: string;
	password: string;
	constructor(public navCtrl: NavController, public proLogin: LoginProvider) {}
	login(email: string, password: string) {
		this.proLogin.login(email, password);
	}
	goToPageCreateAccount() {
		this.navCtrl.push('CreateAccountPage');
	}
}
