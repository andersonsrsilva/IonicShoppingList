import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddShoppingItemPage} from "../add-shopping-item/add-shopping-item";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";
import {Observable} from "rxjs/Observable";
import {Item} from "../../models/item";
import {EditShoopingItemPage} from "../edit-shooping-item/edit-shooping-item";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController,
              private shoppingListProvider: ShoppingListProvider) {

    this.shoppingList$ = this.shoppingListProvider
      .getShoppingList() //DB LIST
      .snapshotChanges() //KEY and VALUE
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
  }

  onAddShoppingItem(): void {
    this.navCtrl.push(AddShoppingItemPage);
  }

  editItem(item: Item) {
    this.navCtrl.push(EditShoopingItemPage, {item: item});
  }
}
