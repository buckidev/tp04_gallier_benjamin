import { Component } from '@angular/core';
import { LogServiceService } from './_Services/log-service.service';
import { Client } from './_Classe/Client';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  client:Client;

  constructor(public logServiceService:LogServiceService,private store: Store) { 
    this.client=this.logServiceService.getCurrentClient();    
  }

  ngOnInit() {
  }

}
