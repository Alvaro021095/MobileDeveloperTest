import { Post } from './../../interfaces/posts.interface';
import { PostsProvider } from './../../providers/posts/posts';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-posts',
	templateUrl: 'posts.html'
})
export class PostsPage {
	posts$: Observable<Post[]>;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public proPosts: PostsProvider
	) {
		//Obtiene datos del provider 'Posts' para luego ser mostrados.
		this.posts$ = this.proPosts.getPosts();
	}
	/**
	 * Metodo que permite navegar hacía la pestaña 'DetailPostPage'
	 * con un objeto de tipo 'Post'.
	 * @param post Objeto tipo 'Post'.
	 */
	goToPageDetailPost(post: Post): void {
		this.navCtrl.push('DetailPostPage', { currentItem: post });
	}
}
