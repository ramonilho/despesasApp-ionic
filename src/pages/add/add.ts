import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Despesa } from '../../models/despesa';

import { HomePage } from '../home/home';

import { LocalStorageService } from 'angular-2-local-storage';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  despesa: Despesa;
  despesas: Despesa[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private localStorageService: LocalStorageService) {
    this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  save() {
    this.despesas = [];
        if (this.localStorageService.get("despesas") != null)
        {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("despesas"));
            for (let jsonObject of jsonObjectArray)
            {
              this.despesas.push(new Despesa(jsonObject.id, jsonObject.tipo, jsonObject.icone, jsonObject.nome, new Date(jsonObject.data), jsonObject.valor));
            }
        }
    this.despesas.push(this.despesa);
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));

  this.navCtrl.setRoot(HomePage);
  }


}
