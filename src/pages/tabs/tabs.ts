import { PostsPage } from './../posts/posts';
import { TakePicturePage } from './../take-picture/take-picture';
import { Component } from '@angular/core';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root = TakePicturePage;
	tab2Root = PostsPage;

	constructor() {}
}
