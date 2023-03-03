import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../../_Services/log-service.service';
import { Client } from '../../_Classe/Client';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  
  client:Client;
  constructor(public logServiceService:LogServiceService) {
    this.client=this.logServiceService.getCurrentClient();
  }

  ngOnInit(): void {
    console.log(this.logServiceService.getCurrentClient())
  }

}
