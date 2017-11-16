import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Item} from "../../models/item";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(public navCtrl: NavController,
              private shoppingListRef: ShoppingListProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  addItem(item: Item) {
    return this.shoppingListRef.additem(item)
      .then(ref => {
        this.navCtrl.setRoot(HomePage, {key: ref.key});
      });
  }
}
