import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { StoreSharedModule } from 'app/shared';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import {
  ClienteComponent,
  ClienteUpdateComponent,
  ClienteDetailComponent,
  ClienteDeleteDialogComponent,
  ClienteDeletePopupComponent,
  clienteRoute,
  clientePopupRoute
} from '.';

const ENTITY_STATES = [...clienteRoute, ...clientePopupRoute];

@NgModule({
  imports: [
    StoreSharedModule,
    TableModule,
    PanelModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    DropdownModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [
    ClienteComponent,
    ClienteUpdateComponent,
    ClienteDetailComponent,
    ClienteDeletePopupComponent,
    ClienteDeleteDialogComponent
  ],
  entryComponents: [
    ClienteComponent,
    ClienteUpdateComponent,
    ClienteDetailComponent,
    ClienteDeletePopupComponent,
    ClienteDeleteDialogComponent
  ],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreClienteModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
