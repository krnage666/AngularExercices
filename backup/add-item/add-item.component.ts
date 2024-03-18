import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/Services/shopping-list.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  newItem: string = '';
  quantity: number = 1;
  formattedDateTime: string = '';
  isQuantityExceeded: boolean = false;
  isItemDuplicate: boolean = false;

  constructor(private shoppingListService: ShoppingListService, private router: Router) {}

  ngOnInit() {
    this.updateDateTime();

    // Mettre à jour la date et l'heure toutes les secondes (1000 millisecondes)
   /* setInterval(() => {
      this.updateDateTime();
    }, 1000);*/
  }

  addItem() {
    // Vérifier si l'article est déjà dans la liste
    if (this.shoppingListService.getShoppingList().includes(this.newItem)) {
      // Afficher la notification d'article en double
      this.isItemDuplicate = true;
      this.isQuantityExceeded = false;
    } else {
      // Vérifier si le nombre total d'articles est inférieur à 5
      if (this.shoppingListService.getShoppingList().length < 5) {
        // Ajouter l'article avec la quantité à la liste
        const itemWithQuantityAndDateTime = `${this.newItem} (Qty: ${this.quantity}) - ajouté le : ${this.formattedDateTime}`;
        const itemWithQuantity = `${this.newItem} (Qty: ${this.quantity})`;
        this.shoppingListService.addItem(itemWithQuantity);

        // Réinitialiser les champs après l'ajout
        this.newItem = '';
        this.quantity = 1;

        // Réinitialiser les notifications
        this.isQuantityExceeded = false;
        this.isItemDuplicate = false;
      } else {
        // Afficher la notification de quantité dépassée
        this.isQuantityExceeded = true;
        this.isItemDuplicate = false;
      }
    }
  }

  navigateToShoppingList() {
    this.router.navigate(['/shopping-list']);
  }

  // Méthode pour déterminer si l'input de quantité doit être désactivé
  isQuantityDisabled(): boolean {
    return this.shoppingListService.getShoppingList().length >= 5;
  }

  updateDateTime() {
    const currentDate = new Date();
    this.formattedDateTime = currentDate.toLocaleDateString();
    //currentDate.toISOString().slice(0, 19).replace('T', ' ');
  }
}


