import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  isItemDuplicate(newItem: string) {
    throw new Error('Method not implemented.');
  }
  private shoppingList: string[] = [];

  addItem(item: string) {
    this.shoppingList.push(item);
  }

  getShoppingList() {
    return this.shoppingList;
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }

  getShoppingListWithDateTime(): string[] {
    return this.shoppingList.map(item => `${item} - ajouté le : ${this.formatDate(new Date())}`);
  }

  private formatDate(date: Date): string {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return date.toLocaleString('fr-FR');
  }

  private extractItemName(item: string): string {
    const index = item.indexOf('(');
    return index !== -1 ? item.substring(0, index).trim() : item.trim();
  }

  private extractItemQuantity(item: string): number {
    const matches = item.match(/\d+/);
    return matches ? +matches[0] : 1;
  }

  private getMessageForMamy(quantity: number): string {
    if (quantity > 1) {
      return ` - Pour mamy : ${this.convertToFrench(quantity)}`;
    }
    return '';
  }

  private convertToFrench(number: number): string {
    const frenchNumbers = ['un', 'deux', 'trois', 'quatre', 'cinq'];
    return frenchNumbers[number - 1] || number.toString();
  }
}



