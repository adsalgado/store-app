import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreButtonDemoModule } from './buttons/button/buttondemo.module';
import { StoreSplitbuttonDemoModule } from './buttons/splitbutton/splitbuttondemo.module';

import { StoreDialogDemoModule } from './overlay/dialog/dialogdemo.module';
import { StoreConfirmDialogDemoModule } from './overlay/confirmdialog/confirmdialogdemo.module';
import { StoreLightboxDemoModule } from './overlay/lightbox/lightboxdemo.module';
import { StoreTooltipDemoModule } from './overlay/tooltip/tooltipdemo.module';
import { StoreOverlayPanelDemoModule } from './overlay/overlaypanel/overlaypaneldemo.module';
import { StoreSideBarDemoModule } from './overlay/sidebar/sidebardemo.module';

import { StoreKeyFilterDemoModule } from './inputs/keyfilter/keyfilterdemo.module';
import { StoreInputTextDemoModule } from './inputs/inputtext/inputtextdemo.module';
import { StoreInputTextAreaDemoModule } from './inputs/inputtextarea/inputtextareademo.module';
import { StoreInputGroupDemoModule } from './inputs/inputgroup/inputgroupdemo.module';
import { StoreCalendarDemoModule } from './inputs/calendar/calendardemo.module';
import { StoreCheckboxDemoModule } from './inputs/checkbox/checkboxdemo.module';
import { StoreChipsDemoModule } from './inputs/chips/chipsdemo.module';
import { StoreColorPickerDemoModule } from './inputs/colorpicker/colorpickerdemo.module';
import { StoreInputMaskDemoModule } from './inputs/inputmask/inputmaskdemo.module';
import { StoreInputSwitchDemoModule } from './inputs/inputswitch/inputswitchdemo.module';
import { StorePasswordIndicatorDemoModule } from './inputs/passwordindicator/passwordindicatordemo.module';
import { StoreAutoCompleteDemoModule } from './inputs/autocomplete/autocompletedemo.module';
import { StoreSliderDemoModule } from './inputs/slider/sliderdemo.module';
import { StoreSpinnerDemoModule } from './inputs/spinner/spinnerdemo.module';
import { StoreRatingDemoModule } from './inputs/rating/ratingdemo.module';
import { StoreSelectDemoModule } from './inputs/select/selectdemo.module';
import { StoreSelectButtonDemoModule } from './inputs/selectbutton/selectbuttondemo.module';
import { StoreListboxDemoModule } from './inputs/listbox/listboxdemo.module';
import { StoreRadioButtonDemoModule } from './inputs/radiobutton/radiobuttondemo.module';
import { StoreToggleButtonDemoModule } from './inputs/togglebutton/togglebuttondemo.module';
import { StoreEditorDemoModule } from './inputs/editor/editordemo.module';

import { StoreMessagesDemoModule } from './messages/messages/messagesdemo.module';
import { StoreToastDemoModule } from './messages/toast/toastdemo.module';
import { StoreGalleriaDemoModule } from './multimedia/galleria/galleriademo.module';

import { StoreFileUploadDemoModule } from './fileupload/fileupload/fileuploaddemo.module';

import { StoreAccordionDemoModule } from './panel/accordion/accordiondemo.module';
import { StorePanelDemoModule } from './panel/panel/paneldemo.module';
import { StoreTabViewDemoModule } from './panel/tabview/tabviewdemo.module';
import { StoreFieldsetDemoModule } from './panel/fieldset/fieldsetdemo.module';
import { StoreToolbarDemoModule } from './panel/toolbar/toolbardemo.module';
import { StoreScrollPanelDemoModule } from './panel/scrollpanel/scrollpaneldemo.module';
import { StoreCardDemoModule } from './panel/card/carddemo.module';
import { StoreFlexGridDemoModule } from './panel/flexgrid/flexgriddemo.module';

import { StoreTableDemoModule } from './data/table/tabledemo.module';
import { StoreVirtualScrollerDemoModule } from './data/virtualscroller/virtualscrollerdemo.module';
import { StorePickListDemoModule } from './data/picklist/picklistdemo.module';
import { StoreOrderListDemoModule } from './data/orderlist/orderlistdemo.module';
import { StoreFullCalendarDemoModule } from './data/fullcalendar/fullcalendardemo.module';
import { StoreTreeDemoModule } from './data/tree/treedemo.module';
import { StoreTreeTableDemoModule } from './data/treetable/treetabledemo.module';
import { StorePaginatorDemoModule } from './data/paginator/paginatordemo.module';
import { StoreGmapDemoModule } from './data/gmap/gmapdemo.module';
import { StoreOrgChartDemoModule } from './data/orgchart/orgchartdemo.module';
import { StoreCarouselDemoModule } from './data/carousel/carouseldemo.module';
import { StoreDataViewDemoModule } from './data/dataview/dataviewdemo.module';

import { StoreBarchartDemoModule } from './charts/barchart/barchartdemo.module';
import { StoreDoughnutchartDemoModule } from './charts/doughnutchart/doughnutchartdemo.module';
import { StoreLinechartDemoModule } from './charts/linechart/linechartdemo.module';
import { StorePiechartDemoModule } from './charts/piechart/piechartdemo.module';
import { StorePolarareachartDemoModule } from './charts/polarareachart/polarareachartdemo.module';
import { StoreRadarchartDemoModule } from './charts/radarchart/radarchartdemo.module';

import { StoreDragDropDemoModule } from './dragdrop/dragdrop/dragdropdemo.module';

import { StoreMenuDemoModule } from './menu/menu/menudemo.module';
import { StoreContextMenuDemoModule } from './menu/contextmenu/contextmenudemo.module';
import { StorePanelMenuDemoModule } from './menu/panelmenu/panelmenudemo.module';
import { StoreStepsDemoModule } from './menu/steps/stepsdemo.module';
import { StoreTieredMenuDemoModule } from './menu/tieredmenu/tieredmenudemo.module';
import { StoreBreadcrumbDemoModule } from './menu/breadcrumb/breadcrumbdemo.module';
import { StoreMegaMenuDemoModule } from './menu/megamenu/megamenudemo.module';
import { StoreMenuBarDemoModule } from './menu/menubar/menubardemo.module';
import { StoreSlideMenuDemoModule } from './menu/slidemenu/slidemenudemo.module';
import { StoreTabMenuDemoModule } from './menu/tabmenu/tabmenudemo.module';

import { StoreBlockUIDemoModule } from './misc/blockui/blockuidemo.module';
import { StoreCaptchaDemoModule } from './misc/captcha/captchademo.module';
import { StoreDeferDemoModule } from './misc/defer/deferdemo.module';
import { StoreInplaceDemoModule } from './misc/inplace/inplacedemo.module';
import { StoreProgressBarDemoModule } from './misc/progressbar/progressbardemo.module';
import { StoreRTLDemoModule } from './misc/rtl/rtldemo.module';
import { StoreTerminalDemoModule } from './misc/terminal/terminaldemo.module';
import { StoreValidationDemoModule } from './misc/validation/validationdemo.module';
import { StoreProgressSpinnerDemoModule } from './misc/progressspinner/progressspinnerdemo.module';

@NgModule({
  imports: [
    StoreMenuDemoModule,
    StoreContextMenuDemoModule,
    StorePanelMenuDemoModule,
    StoreStepsDemoModule,
    StoreTieredMenuDemoModule,
    StoreBreadcrumbDemoModule,
    StoreMegaMenuDemoModule,
    StoreMenuBarDemoModule,
    StoreSlideMenuDemoModule,
    StoreTabMenuDemoModule,

    StoreBlockUIDemoModule,
    StoreCaptchaDemoModule,
    StoreDeferDemoModule,
    StoreInplaceDemoModule,
    StoreProgressBarDemoModule,
    StoreInputMaskDemoModule,
    StoreRTLDemoModule,
    StoreTerminalDemoModule,
    StoreValidationDemoModule,

    StoreButtonDemoModule,
    StoreSplitbuttonDemoModule,

    StoreInputTextDemoModule,
    StoreInputTextAreaDemoModule,
    StoreInputGroupDemoModule,
    StoreCalendarDemoModule,
    StoreChipsDemoModule,
    StoreInputMaskDemoModule,
    StoreInputSwitchDemoModule,
    StorePasswordIndicatorDemoModule,
    StoreAutoCompleteDemoModule,
    StoreSliderDemoModule,
    StoreSpinnerDemoModule,
    StoreRatingDemoModule,
    StoreSelectDemoModule,
    StoreSelectButtonDemoModule,
    StoreListboxDemoModule,
    StoreRadioButtonDemoModule,
    StoreToggleButtonDemoModule,
    StoreEditorDemoModule,
    StoreColorPickerDemoModule,
    StoreCheckboxDemoModule,
    StoreKeyFilterDemoModule,

    StoreMessagesDemoModule,
    StoreToastDemoModule,
    StoreGalleriaDemoModule,

    StoreFileUploadDemoModule,

    StoreAccordionDemoModule,
    StorePanelDemoModule,
    StoreTabViewDemoModule,
    StoreFieldsetDemoModule,
    StoreToolbarDemoModule,
    StoreScrollPanelDemoModule,
    StoreCardDemoModule,
    StoreFlexGridDemoModule,

    StoreBarchartDemoModule,
    StoreDoughnutchartDemoModule,
    StoreLinechartDemoModule,
    StorePiechartDemoModule,
    StorePolarareachartDemoModule,
    StoreRadarchartDemoModule,

    StoreDragDropDemoModule,

    StoreDialogDemoModule,
    StoreConfirmDialogDemoModule,
    StoreLightboxDemoModule,
    StoreTooltipDemoModule,
    StoreOverlayPanelDemoModule,
    StoreSideBarDemoModule,

    StoreTableDemoModule,
    StoreDataViewDemoModule,
    StoreVirtualScrollerDemoModule,
    StoreFullCalendarDemoModule,
    StoreOrderListDemoModule,
    StorePickListDemoModule,
    StoreTreeDemoModule,
    StoreTreeTableDemoModule,
    StorePaginatorDemoModule,
    StoreOrgChartDemoModule,
    StoreGmapDemoModule,
    StoreCarouselDemoModule,
    StoreProgressSpinnerDemoModule
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreprimengModule {}
