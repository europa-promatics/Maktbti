import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLibrary } from './my-library';

@NgModule({
  declarations: [
    MyLibrary,
  ],
  imports: [
    IonicPageModule.forChild(MyLibrary),
  ],
  exports: [
    MyLibrary
  ]
})
export class MyLibraryModule {}
