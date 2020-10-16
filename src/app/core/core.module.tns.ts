import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { TaskService } from '@src/app/core/task.service';
import { UiKitService } from '@src/app/core/ui-kit.service';
import { FlatpickrService } from '@src/app/core/flatpickr.service';
import { FuseService } from '@src/app/core/fuse.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule
  ],
  declarations: [
  ],
  providers: [
  TaskService,
  UiKitService,
  FlatpickrService,
  FuseService],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CoreModule { }
