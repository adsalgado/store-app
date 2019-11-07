import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Customer } from 'app/shared/model/customer.model';
import { ClienteComponent } from './cliente.component';
import { ICustomer } from 'app/shared/model/customer.model';
import { ClienteService } from './cliente.service';
import { ClienteUpdateComponent } from './cliente-update.component';
import { ClienteDetailComponent } from './cliente-detail.component';
import { ClienteDeletePopupComponent } from './cliente-delete-dialog.component';

@Injectable({ providedIn: 'root' })
export class ClienteResolve implements Resolve<ICustomer> {
  constructor(private service: ClienteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Customer>) => response.ok),
        map((customer: HttpResponse<Customer>) => customer.body)
      );
    }
    return of(new Customer());
  }
}

export const clienteRoute: Routes = [
  {
    path: '',
    component: ClienteComponent,
    resolve: {
      pagingParams: JhiResolvePagingParams
    },
    data: {
      authorities: ['ROLE_USER'],
      defaultSort: 'id,asc',
      pageTitle: 'storeApp.customer.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: ClienteDetailComponent,
    resolve: {
      customer: ClienteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'storeApp.customer.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: ClienteUpdateComponent,
    resolve: {
      customer: ClienteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'storeApp.customer.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: ClienteUpdateComponent,
    resolve: {
      customer: ClienteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'storeApp.customer.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const clientePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: ClienteDeletePopupComponent,
    resolve: {
      customer: ClienteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'storeApp.customer.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
