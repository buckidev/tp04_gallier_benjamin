import { Component, OnInit  } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  FormIdentification: FormGroup;
  Res: String="";

  constructor(private formBuilder: FormBuilder){
    this.FormIdentification = this.formBuilder.group({
      Civilite: ['',Validators.required],
      name: ['',Validators.required],
      prenom: ['',Validators.required],
      pays: ['',Validators.required],
      CP: ['',Validators.required],
      Ville: ['',Validators.required],
      adresse: ['',Validators.required],
      Tel: ['',Validators.required],
      Email: ['',Validators.required],
      Login: ['',Validators.required],
      Password: ['',Validators.required],
      Password2: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }
    
  submit () {
    console.log(this.FormIdentification.value);
    this.Res=JSON.stringify(this.FormIdentification.value);
  }

  clear(){
    console.log("clear");
    this.Res="";    
  }

  clearA(){
    console.log("clear");
    this.Res="";    
  }

}
