// import {SelectionModel} from '@angular/cdk/collections';
// import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { data } from './orders';
import { Subscription } from 'rxjs';
// import { ShopifyAdminService } from '../../services/shopify-admin.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit  {
  orders: any[];
  array: any[];
  dataSource: any;
  orderSub: Subscription;
  displayedColumns: string[] = ['select', 'name', 'email', 'firstname', 'lastname', 'price'];


  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    const  orderss = this.Orders();
    this.dataSource = new MatTableDataSource(orderss);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }



 Orders() {
  const array: any[] = [];
  data.orders.forEach((item) => {
   array.push({
        Id: item.node.id,
        name: item.node.name,
        email: item.node.email,
        firstname: item.node.customer.firstName,
        lastname: item.node.customer.lastName,
        customerId: item.node.customer.id,
        price: item.node.totalPriceSet.presentmentMoney.amount
   });
   });
  return array;

 }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  // ngOnInit(): void {
  //   this.orderSub = this.shopify.orders$.subscribe(res => {
  //     if (res && res.length > 0) {
  //       this.orders = res;
  //     }
  //   });

    // this.shopify.getOrders();
  }

// }



// export const Orders=() =>{
//   data.orders.forEach((item)=>{

//     let array;[];
//    .push({
//      Id:item.node.id,
//      name:item.node.name,
//      email:item.node.email,
//      firstname:item.node.customer.firstName,
//      lastname:item.node.customer.lastName,
//      customerId:item.node.customer.id,
//      price:item.node.totalPriceSet.presentmentMoney.amount
//    });
//    });
// console.log('dataaaaa',);

//  }
