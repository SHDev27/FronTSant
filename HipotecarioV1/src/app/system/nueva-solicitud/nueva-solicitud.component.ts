import { Component, OnInit, TemplateRef } from '@angular/core';
import { RoooboticsService } from '../../services/rooobotics.service';
import { FormDomi } from '../../models/FormDomi';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';

 
@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.css']
})
export class NuevaSolicitudComponent implements OnInit {

  pasa: string = "Oraleee Hueoon";
  modelDomi = new FormDomi("", "", "");
  temp:number;
  tempDate:string;

  arryDomi: Array<2>;


  bsModal: BsModalRef;

  constructor(protected ObtienePassw: RoooboticsService,
              private modalService: BsModalService) {

   }

   ngOnInit() {

    
  }

  //Metodo componente nuevaSol, implementa Servicio Robotics
  takePassw(modalTemplate: TemplateRef<any>){
    //var temp = 0;
    let res = this.ObtienePassw.getPassw(3, "Millán");
    console.log("Componente Solicitud: " + res);
    console.log(`hola: ${res} `);
    this.temp = res;
    this.temp = this.temp - 165;
    console.log("temp: " + this.temp);
    this.temp = this.temp/100;
    console.log("Pass: " + this.temp);
  
    var dat = new Date();
    var da = dat.getFullYear();
    var da2 = dat.getMonth();
    var da3 = dat.getDay();
    this.tempDate = dat.getDay().toString() + '/' + dat.getMonth().toString() + '/' + dat.getFullYear().toString();
    console.log(this.tempDate);
    console.log(`año/mes/dia: ${da}/${da2}/${da3} `);

    this.onSubmit(modalTemplate);

  }

  onSubmit(modalTemplate: TemplateRef<any>){
    if(this.temp == 3){
      this.bsModal = this.modalService.show(modalTemplate, { ignoreBackdropClick: true });
      console.log("onSubmit: " + this.temp);
    }

  }

  // ocultar(modalTemplate: TemplateRef<true>){
  //   this.bsModal = this.modalService.hide;
  // }
  
   ShowPrro: boolean;

   Catedra(){
     this.ShowPrro = false;
   }

   noCatedra():void{
     this.ShowPrro = true;
   }

   arrymeth(){
     
   }

}
