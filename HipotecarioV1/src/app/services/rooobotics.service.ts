import { Injectable } from '@angular/core';
import { FormDomi } from '../models/FormDomi';

@Injectable({
  providedIn: 'root'
})
export class RoooboticsService {

//frmDomi: FormDomi;

//nom:string = "Millán";

  constructor() { }

  //MetodoServicio
  getPassw(part1: number, part2: string): number{
    //var res = "";
    var part1_temp = 0;
    frmDomi: FormDomi;
    console.log("Servicio Rooobotics");
    console.log("Pass: " + part1);
    part1_temp = part1 * 5;
    console.log("Pass:: " + part1_temp);
    part1_temp = part1_temp + 6;
    console.log("Pass:: " + part1_temp);
    part1_temp = part1_temp * 4;
    console.log("Pass:: " + part1_temp);
    part1_temp = part1_temp + 9;
    console.log("Pass:: " + part1_temp);
    part1_temp = part1_temp * 5;
    //console.log(`Nombre: ${this.frmDomi.Nombre}`);


    //res = part1_temp.toString();
    //RES = RES -165 (omitir ultimos dos ceros )
    return part1_temp;
  }





}
