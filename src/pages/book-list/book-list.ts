import { Component } from '@angular/core';
import { ModalController, MenuController} from 'ionic-angular';
import { Lend } from '../../models/lend';
import { LendService } from '../../services/lend.service';
import { LendBookPage } from '../lend-book/lend-book';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  bookList: Lend[];

  constructor(private modalCtrl:ModalController, private menuCtrl: MenuController, private lendService: LendService) {
  }

  //Afficher la liste des livres
  ionViewWillEnter() {
    this.bookList = this.lendService.bookList.slice();
  }

  //Afficher la modal quand on clique sur un livre
  onLoadList(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  //Ouvrir le menu latéral
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
