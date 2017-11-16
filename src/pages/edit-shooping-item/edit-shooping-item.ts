import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Item} from "../../models/item";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";
import {HomePage} from "../home/home";
import {ToastService} from '../../providers/toast.service';

@Component({
  selector: 'page-edit-shooping-item',
  templateUrl: 'edit-shooping-item.html',
})
export class EditShoopingItemPage {

  item: Item;

  constructor(public navCtrl: NavController,
              private toast: ToastService,
              private shoppingListProvider: ShoppingListProvider,
              public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item) {
    this.shoppingListProvider.editItem(item)
      .then(() => {
      this.toast.show(`${item.name} saved!`);
        this.navCtrl.setRoot(HomePage);
      })
  }

  removeItem(item: Item) {
    this.shoppingListProvider.removeItem(item)
      .then(() => {
      this.toast.show(`${item.name} removed!`);
        this.navCtrl.setRoot(HomePage);
      })
  }
}
