import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-top-app',
  templateUrl: './top-app.component.html',
  styleUrls: ['./top-app.component.css']
})
export class TopAppComponent implements OnInit {

  constructor(private http: HttpClient) {}
  public ApplicationData;
  public maxObjectShow = 6;
  public showMoreBool = false;
  public noDataBool = false;
  public showLoaded = false;

  showMore(): void {
    this.maxObjectShow = 10;
    this.showMoreBool = true;
  }
  showLess(): void {
    this.maxObjectShow = 6;
    this.showMoreBool = false;
  }
  reScrap(): void {
    this.showLoaded = true;
    this.http.get<any>(`${environment.apiUrl}/web/re-scrap`).subscribe(data => {
      setTimeout(() => {
        this.getTopApplications();
      }, 3000);
    });
  }
  getTopApplications(): void {
    this.showLoaded = false;
    this.http.get<any>(`${environment.apiUrl}/web/top`).subscribe(data => {
      this.ApplicationData = data.data;
      this.noDataBool = false;
      if (Object.keys(this.ApplicationData).length <= 0) {
        this.noDataBool = true;
      }
      this.showLoaded = false;
    });
  }

  ngOnInit() {
    this.getTopApplications();
  }

}
