import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Patient} from "../patient/patient.component";
@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.css']
})
export class CaregiverComponent implements OnInit {
  patients: Patient[] = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getAllPatients();
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
