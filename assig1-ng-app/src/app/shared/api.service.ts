import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../patient/patient.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/";
  private ALL_PATIENTS_URL = this.BASE_URL.concat("/patients");
  private INSERT_PATIENT_URL = this.BASE_URL.concat("/patients");
  private ALL_DOCTORS_URL = this.BASE_URL.concat("/doctors");

  patients: Patient[] = [];

  constructor(private http : HttpClient) { }

  getAllPatients() : Observable<Patient[]>{
    return this.http.get<Patient[]>(this.ALL_PATIENTS_URL);
  }

  insertPatient(patient : Patient) : Observable<any>{
    return this.http.post(this.INSERT_PATIENT_URL, patient);
  }
}
