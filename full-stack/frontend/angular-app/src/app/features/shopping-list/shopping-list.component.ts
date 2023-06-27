import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShoppingListItemModel } from './model';
import { CreateComponent } from "./components/create/create.component";
import { ListComponent } from "./components/list/list.component";

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, CreateComponent, ListComponent]
})
export class ShoppingListComponent {
  list = signal([
    { id : '1', description: 'shampoo', purchased: false},
    {id: '2', description: 'lettuce', purchased: true}
  ]);

  onItemAdded(description: string){
    //TODO
    console.log(`we got a new item ${description}`);
    const itemToAdd: ShoppingListItemModel = {
      id: crypto.randomUUID(),
      description: description,
      purchased: false
    };

    this.list.mutate((li) => li.unshift(itemToAdd))
  }


}
