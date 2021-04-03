import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private _HttpClient:HttpClient) { }
  getAllStudents(page_number:number,students_per_page:number):Observable<any>
  {
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page_number}&per_page=${students_per_page}`);
  }
  getStudentDetails(id:number):Observable<any>
  {
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`);
  }
}