import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllBooks } from './all-books';

@NgModule({
  declarations: [
    AllBooks,
  ],
  imports: [
    IonicPageModule.forChild(AllBooks),
  ],
  exports: [
    AllBooks
  ]
})
export class AllBooksModule {}
