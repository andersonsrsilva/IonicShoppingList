import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Item} from "../../models/item";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-edit-shooping-item',
  templateUrl: 'edit-shooping-item.html',
})
export class EditShoopingItemPage {

  item: Item;

  constructor(public navCtrl: NavController,
              private shoppingListProvider: ShoppingListProvider,
              public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shoppingListProvider.editItem(item)
      .then(() => {
        this.navCtrl.push(HomePage);
      })
  }
}
