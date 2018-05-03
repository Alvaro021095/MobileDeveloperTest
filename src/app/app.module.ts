import { TakePicturePage } from './../pages/take-picture/take-picture';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccountProvider } from '../providers/create-account/create-account';
import { LoginProvider } from '../providers/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { Camera } from '@ionic-native/camera';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostsProvider } from '../providers/posts/posts';
import { TabsPage } from '../pages/tabs/tabs';
import { PostsPage } from '../pages/posts/posts';

@NgModule({
	declarations: [ MyApp, HomePage, TabsPage, TakePicturePage, PostsPage ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule.enablePersistence(),
		AngularFireAuthModule,
		AngularFireStorageModule,
		HttpClientModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage, TabsPage, TakePicturePage, PostsPage ],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		CreateAccountProvider,
		LoginProvider,
		Camera,
		HttpClientModule,
		PostsProvider,
		HttpClient
	]
})
export class AppModule {}
