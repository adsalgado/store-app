import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { LazyLoadEvent } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ICustomer } from 'app/shared/model/customer.model';
import { AccountService } from 'app/core';

import { ClienteService } from './cliente.service';

@Component({
  selector: 'jhi-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [MessageService]
})
export class ClienteComponent implements OnInit, OnDestroy {
  currentAccount: any;
  customers: ICustomer[];
  error: any;
  success: any;
  eventSubscriber: Subscription;
  currentSearch: string;
  routeData: any;
  links: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  totalRecords: number;
  loading: boolean;

  constructor(
    protected clienteService: ClienteService,
    protected parseLinks: JhiParseLinks,
    protected jhiAlertService: JhiAlertService,
    protected accountService: AccountService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected eventManager: JhiEventManager,
    protected messageService: MessageService
  ) {
    this.loading = false;
    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.page = data.pagingParams.page;
      this.previousPage = data.pagingParams.page;
      this.reverse = data.pagingParams.ascending;
      this.predicate = data.pagingParams.predicate;
    });
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }
  ngOnInit(): void {
    // this.loadAll();
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Prueba msg' });
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }

  loadDataLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    var sortField = event.sortField ? event.sortField : 'id';
    var sortOrder = event.sortOrder !== 1 ? 'desc' : 'asc';

    this.clienteService
      .query({
        page: event.first / event.rows,
        size: event.rows,
        sort: ['' + sortField + ',' + sortOrder + '']
      })
      .subscribe(
        (res: HttpResponse<ICustomer[]>) => this.paginateCustomers(res.body, res.headers),
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  protected paginateCustomers(data: ICustomer[], headers: HttpHeaders) {
    this.totalRecords = parseInt(headers.get('X-Total-Count'), 10);
    this.customers = data;
    this.loading = false;
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
    this.messageService.add({ severity: 'error', summary: 'Error', detail: errorMessage });
  }
}
