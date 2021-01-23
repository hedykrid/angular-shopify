import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopifyAdminService } from 'src/app/services/shopify-admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  loading = true;
  customers: any[];
  customersSub: Subscription;
  fetchAll = false;
  queries = [
    {
      name: 'waitlist',
      query: encodeURIComponent(`customer_date:>2020-04-01 AND NOT tag:checkout_enabled`),
    },
    {
      name: 'waitlistr',
      query: encodeURIComponent(`customer_date:past_quarter AND tag:\\"waitlistr\\"`)
    },
    {
      name: 'checkout_enabled',
      query: encodeURIComponent(`customer_date:>2010-11-20 AND tag:\\"checkout_enabled\\"`)
    },
    {
      name: 'missing zip',
      query: encodeURIComponent(`customer_date:>2020-04-01 AND NOT tag:checkout_enabled AND NOT zip:*`)
    },
  ];
  activeQuery = this.queries[0].query;
  constructor(
    private shopify: ShopifyAdminService
  ) { }

  ngOnInit(): void {
    this.customersSub = this.shopify.customers$.subscribe(res => {
      if (res && res.customers && res.customers.length > 0) {
        this.loading = false;
        this.customers = res.customers;
      }
    });
    this.getCustomers();
  }
  getCustomers(): void {
    this.loading = true;
    this.shopify.getCustomers(this.activeQuery, this.fetchAll);
  }
}
