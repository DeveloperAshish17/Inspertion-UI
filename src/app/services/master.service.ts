import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  Url = "https://localhost:7118/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.Url + '/inspections');
  }

  addInspection(data: any) {
    return this.http.post(this.Url + '/inspections', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.Url + `/inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.Url + '/inspections/${id}');
  }


  //InspectionsTypes

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.Url + '/inspectionTypes');
  }

  addInspectionTypes(data: any) {
    return this.http.post(this.Url + '/inspectionTypes', data);
  }

  updateInspectionTypes(id: number | string, data: any) {
    return this.http.put(this.Url + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string) {
    return this.http.delete(this.Url + '/inspectionTypes/${id}');
  }

  //Statuses

  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.Url + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.Url + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.Url + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.Url + '/status/${id}');
  }


}
