import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  model : Patient = {
    name:"",
    birthDate:new Date(),
    gender:"",
    address:""
}

  patients: Patient[] = [];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  insertPatient():void{
    this.apiService.insertPatient(this.model).subscribe(
      res=>{
        location.reload();
      },
      err =>{
        alert("An error has occured");
      }
    )
  }

  public getAllPatients(){
    let url = "http://localhost:8080/patients"
    this.apiService.getAllPatients().subscribe(
      res => {
        this.patients = res;
      },
      error => {
        alert("An error has occured");
      }
    )
  }

}

export interface Patient{
  name:string;
  birthDate:Date;
  gender:string;
  address:string;
}
