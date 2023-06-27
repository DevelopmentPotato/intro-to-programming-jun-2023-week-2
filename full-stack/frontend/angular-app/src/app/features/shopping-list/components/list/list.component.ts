import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemModel } from '../../model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input({required: true}) list: ShoppingListItemModel[] = [];
}
