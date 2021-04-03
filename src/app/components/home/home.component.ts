import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students:any[] = [];
  constructor(private _studentServices:StudentsService){
    _studentServices.getAllStudents(1,6).subscribe(res => {
      this.students = res.data;
    })
  }
  ngOnInit(): void {
  }
}