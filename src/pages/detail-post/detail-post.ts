import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../interfaces/posts.interface';

/**
 * Generated class for the DetailPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-post',
	templateUrl: 'detail-post.html'
})
export class DetailPostPage {
	detailPost: Post;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.detailPost = navParams.get('currentItem');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailPostPage');
	}
}
