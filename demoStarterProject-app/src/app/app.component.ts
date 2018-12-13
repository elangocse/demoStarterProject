import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
constructor(private http: HttpClient) { }

data:String;

ngOnInit() {
      let url=window.location.protocol+"//"+window.location.host+"/greet";
      return this.http.get("url",
      {responseType: 'text'})
      .subscribe(data => this.data = data)
  }
    }






