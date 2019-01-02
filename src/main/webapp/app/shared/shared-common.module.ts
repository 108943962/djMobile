import { NgModule } from '@angular/core';

import { DjMobileSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DjMobileSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DjMobileSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DjMobileSharedCommonModule {}
