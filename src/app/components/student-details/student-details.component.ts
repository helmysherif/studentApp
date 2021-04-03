import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:any;
  studentDetail:any = [];
  constructor(private _studentServices:StudentsService,private _ActivatedRoute:ActivatedRoute){
    this.id = _ActivatedRoute.snapshot.paramMap.get("id");
    _studentServices.getStudentDetails(this.id).subscribe(res=>{
      this.studentDetail = res.data;      
    })
  }

  ngOnInit(): void {
  }

}
