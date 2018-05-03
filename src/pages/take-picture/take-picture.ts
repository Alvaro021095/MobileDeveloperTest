import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the TakePicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-take-picture',
	templateUrl: 'take-picture.html'
})
export class TakePicturePage {
	message: string = 'No picture taken';
	base64Image: string = '';
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public cameraPlugin: Camera
	) {
		console.log(this.message + ' - ' + this.base64Image);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TakePicturePage');
	}
	takePicture() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.base64Image = 'data:image/jpeg;base64,' + imageData;
				this.message = '';
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
