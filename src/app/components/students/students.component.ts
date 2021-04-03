import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any[] = [];
  totalPages:any[] = [];
  studentPerPage:any[] = [];
  studentsNum:any = 6;
  pagesNum:any = 1;
  constructor(private _studentServices:StudentsService){
    this._studentServices.getAllStudents(this.pagesNum,this.studentsNum).subscribe(res => {
      this.students = res.data;
      for (let i = 0; i < res.total_pages; i++) {
        this.totalPages[i] = i+1;
      }
      for (let i = 0; i < res.total; i++) {
        this.studentPerPage[i] = i+1;
      }
    })
  }
  ngOnInit(): void {}
  displayStudentInPage()
  {    
    this._studentServices.getAllStudents(this.pagesNum,this.studentsNum).subscribe(res => {
      console.log(res.total_pages);
      this.students = res.data;
      this.totalPages = [];
      for (let i = 0; i < res.total_pages; i++) {
        this.totalPages[i] = i+1;
      }
    })
  }
  displayNumOfPages()
  {    
    this._studentServices.getAllStudents(this.pagesNum,this.studentsNum).subscribe(res => {
      this.students = res.data;
    })
  }
}
