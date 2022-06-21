import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/models/persona/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  persona : Persona;

  formLogin= new FormGroup({
    user:new FormControl(''),
    pass: new FormControl('')
})

  constructor() { 
    this.persona=new Persona;
  }

  validarUsuario(){
      if (this.formLogin.get('user')?.value=='Julio' 
      //&&  this.formLogin.get('passs')?.value=='1234'
      ) {
        alert('ingreso correcto')
      }
      else{
        alert("fallo")}
   }

  ngOnInit(): void {  } 

  

}
