import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  public ApplicationData;
  public showLoaded = false;
  public showImage = false;
  public showimageUrl = '';

  getAppDetails(appId): void {
    this.showLoaded = true;
    this.http.get<any>(`${environment.apiUrl}/web/get-detailed-data?id=${appId}`).subscribe(data => {
      this.ApplicationData = data.data;
      //console.log(this.ApplicationData);
      this.showLoaded = false;
    });
  }
  public scrollLeft(el: HTMLElement): void {
    el.scrollLeft -= 30;
  }

  public scrollRight(el: HTMLElement): void {
    el.scrollLeft += 30;
  }
  public showImageDiv(url: any): void {
   this.showimageUrl = url;
   this.showImage = true;
  }
  public closeImageShow(): void {
    this.showImage = false;
  }

  ngOnInit() {
    const appId: string = this.route.snapshot.queryParamMap.get('id');
    if (appId) {
      this.getAppDetails(appId);
    } else {
      console.log('here');
      this.ApplicationData = {};
    }
  }

}
