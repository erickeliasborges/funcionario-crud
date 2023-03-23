import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.api;
  private urlFeature: string = "employee";

  constructor(public httpClient: HttpClient) { }

  private get url() {
    return `${this.baseUrl}/${this.urlFeature}`;
  }

  public loadAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }

  public findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.url}/${id}`);
  }

  public deleteById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  public update(employee: Employee): Observable<any> {
    return this.httpClient.put(`${this.url}`, employee);
  }

  public save(employee: Employee): Observable<any> {
    return this.httpClient.post(`${this.url}`, employee);
  }

}
