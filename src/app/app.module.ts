import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FIREBASE_CONFIG} from "./firebase.credentials";
import {HomePage} from "../pages/home/home";
import {AddShoppingItemPage} from "../pages/add-shopping-item/add-shopping-item";
import { ShoppingListProvider } from '../providers/shopping-list/shopping-list';
import {EditShoopingItemPage} from "../pages/edit-shooping-item/edit-shooping-item";
import {ToastService} from '../providers/toast.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddShoppingItemPage,
    EditShoopingItemPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddShoppingItemPage,
    EditShoopingItemPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListProvider,
    ToastService
  ]
})
export class AppModule {
}
