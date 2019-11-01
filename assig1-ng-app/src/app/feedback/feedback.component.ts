import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {error} from "util";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Patient = {
      name:"",
      birthDate:new Date(),
      gender:"",
      address:"",
  }

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
  }

  insertPatient():void{
    let url = "http://localhost:8080/patients";
    this.http.post(url, this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occured while inserting patient")
      }
    );
  }

}

export interface Patient{
  name:string;
  birthDate:Date;
  gender:string;
  address:string;
}
