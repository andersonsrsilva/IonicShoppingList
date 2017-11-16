import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Item} from "../../models/item";

@Injectable()
export class ShoppingListProvider {

  private shoppingListRef = this.db.list<Item>('shopping-list');

  constructor(private db: AngularFireDatabase) {
  }

  getShoppingList() {
    return this.shoppingListRef;
  }

  additem(item: Item) {
    return this.shoppingListRef.push(item);
  }
}
