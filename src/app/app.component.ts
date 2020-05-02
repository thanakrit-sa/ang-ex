import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-ex';
  sData:any[] = [];
  constructor(private http:HttpClient) {

  }

  onSubmit(data) {
    console.log(data);
    let post = {username:data.username, feedback:data.feedback}
    this.http.post<any>('http://localhost:3000/api', post).subscribe(result => {
      alert(JSON.stringify(result));
    });
  }

  getFeedBack() {
    this.http.get<any>('http://localhost:3000/api').subscribe(result => {
      this.sData = result.data;
      // console.log(this.sData);
      // alert(JSON.stringify(result));
    });
  }

  ngOnInit(): void {
    this.getFeedBack();
    // console.log(this.data);
    
    
  }
    
}
