import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../../../shared';
import { ButtonModule } from 'primeng/primeng';
import { WizardModule } from 'primeng-extensions/components/wizard/wizard.js';
import { GrowlModule } from 'primeng/primeng';

import { ButtonDemoComponent, buttonDemoRoute } from './';

const primeng_STATES = [buttonDemoRoute];

@NgModule({
  imports: [StoreSharedModule, ButtonModule, WizardModule, GrowlModule, RouterModule.forRoot(primeng_STATES, { useHash: true })],
  declarations: [ButtonDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreButtonDemoModule {}
