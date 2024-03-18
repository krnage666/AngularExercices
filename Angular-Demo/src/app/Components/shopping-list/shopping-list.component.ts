import { Component } from '@angular/core';
import { ShoppingListService } from 'src/Services/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  get shoppingList() {
    return this.shoppingListService.getShoppingListWithDateTime();
  }

  removeItem(index: number) {
    this.shoppingListService.removeItem(index);
  }

  // Vérifier si les itemName ne sont pas en double dans la liste
  isItemNameDuplicate(item: string): boolean {
    const itemCount = this.shoppingList.filter((listItem) => listItem.includes(item)).length;
    return itemCount > 1;
  }

  getItemName(item: string): string {
    const index = item.indexOf('(');
    return index !== -1 ? item.substring(0, index).trim() : item.trim();
  }
}

