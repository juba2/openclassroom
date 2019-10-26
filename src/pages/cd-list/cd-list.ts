import { Component } from '@angular/core';
import {ModalController, MenuController} from 'ionic-angular';
import { Lend } from '../../models/lend';
import { LendCdPage } from '../lend-cd/lend-cd';
import { LendService } from '../../services/lend.service';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdList: Lend[];

  constructor(private modalCtrl:ModalController, private menuCtrl: MenuController, private lendService: LendService) {
  }

  //Afficher la liste des livres
  ionViewWillEnter() {
    this.cdList = this.lendService.cdList.slice();
  }

  //Afficher la modal quand on clique sur un livre
  onLoadList(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  //Ouvrir le menu latéral
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
