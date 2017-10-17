import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Despesa } from '../../models/despesa';
import { AddPage } from '../add/add';

import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  despesas: Despesa[];

  constructor(public navCtrl: NavController, private localStorageService: LocalStorageService) {
    // this.despesas = [
    //   new Despesa(1, "Mercado", "cart", "Extra",
    //     new Date("2017-08-01T03:00:00-03:00"), 200.5),

    //   new Despesa(2, "Lazer", "ios-film", "Cinemark",
    //     new Date("2017-08-01T08:00:00-03:00"), 59.9),
    // ];
    this.despesas = [];
    if (this.localStorageService.get("despesas") != null){
      let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("despesas"));
      for (let jsonObject of jsonObjectArray){
        switch(jsonObject.tipo){
          case "Saúde":
            jsonObject.icone = "medical";
          break;
          case "Mercado":
            jsonObject.icone = "cart";
          break;
          case "Lazer":
            jsonObject.icone = "american-football";
          break;
        }
        this.despesas.push(new Despesa(jsonObject.id, jsonObject.tipo, jsonObject.icone, jsonObject.nome, new Date(jsonObject.data), jsonObject.valor));
      }
    }


  }

  add() {
    this.navCtrl.push(AddPage);
  };

  del(id){
    for (var i=0; i < this.despesas.length; i++)
    {
      if (this.despesas[i].id == id)
      {
        this.despesas[i].deleted = true;
        this.despesas.splice(i, 1);
      }
    }
    this.localStorageService.set("despesas", JSON.stringify(this.despesas));
  };

}
