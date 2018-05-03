import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/posts.interface';

/*
  Generated class for the PostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostsProvider {
	url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(public http: HttpClient) {
		console.log('Hello PostsProvider Provider');
	}
	getPosts() {
		return this.http.get<Post[]>(this.url);
	}
}
