import { Injectable } from '@angular/core';
import { Client } from '../_Classe/Client';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  
  CurrentLog:Client;
  PanierSize:number;
  constructor() { 
    this.CurrentLog=new Client("","","","");
    this.PanierSize=0;
  }

  setCurrentClient(login:String,mdp:String,Nom:String,Prenom:String){
    this.CurrentLog.login=login;
    this.CurrentLog.mdp=mdp;
    this.CurrentLog.Nom=Nom;
    this.CurrentLog.Prenom=Prenom;
  }

  getCurrentClient(){
    return this.CurrentLog;
  }

  ClearCurrentLog(){
    this.CurrentLog==new Client("","","","");
  }

  addArticle(){
    this.PanierSize=this.PanierSize+1;
  }

  rmArticle(){
    this.PanierSize=this.PanierSize-1;
  }
}
