import { Component , OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Lend } from '../../models/lend';
import { LendService } from '../../services/lend.service';


@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{
  index: number;
  lend: Lend;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private lendService: LendService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.lend = this.lendService.cdList[this.index];
  }

  //fermer la modal
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleList() {
    this.lend.isOn = !this.lend.isOn;
  }

}
