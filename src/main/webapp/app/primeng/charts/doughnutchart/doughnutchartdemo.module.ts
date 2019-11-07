import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../../../shared';
import { ChartModule } from 'primeng/primeng';

import { DoughnutchartDemoComponent, doughnutchartDemoRoute } from '../../charts/doughnutchart';

const primeng_STATES = [doughnutchartDemoRoute];

@NgModule({
  imports: [StoreSharedModule, ChartModule, RouterModule.forRoot(primeng_STATES, { useHash: true })],
  declarations: [DoughnutchartDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreDoughnutchartDemoModule {}
