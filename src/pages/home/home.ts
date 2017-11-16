import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AddShoppingItemPage} from "../add-shopping-item/add-shopping-item";
import {ShoppingListProvider} from "../../providers/shopping-list/shopping-list";
import {Observable} from "rxjs/Observable";
import {Item} from "../../models/item";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController,
              private shoppingListProvider: ShoppingListProvider) {


  }

  onAddShoppingItem(): void {
    this.navCtrl.push(AddShoppingItemPage);
  }
}
