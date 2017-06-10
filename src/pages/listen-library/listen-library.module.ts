import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListenLibrary } from './listen-library';

@NgModule({
  declarations: [
    ListenLibrary,
  ],
  imports: [
    IonicPageModule.forChild(ListenLibrary),
  ],
  exports: [
    ListenLibrary
  ]
})
export class ListenLibraryModule {}
