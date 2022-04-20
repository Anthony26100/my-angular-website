import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http: HttpClient, private scroll:ViewportScroller, public api:ApiService) {}

  joke:any;
  jokeNotFound = true;
  gallery:any;
  page = 1;
  urlPicsum='';
  urlChuck = this.api.urlChuck;



  loadPics(way="",nb=this.page){
    switch(way){
      case 'next':
        this.page++;
        break;
      case 'prev':
        this.page>1 ? this.page-- : null; // condition terner (pareil que if)
        break;
      case '':
        this.page = nb;
        break;
    }
    this.urlPicsum = 'https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    
    this.api.getUrl(this.urlPicsum).subscribe(
      (data) => {
        this.gallery = data;
        console.log(data);
      }
    );
    this.scroll.scrollToAnchor("top");
  }


  ngOnInit(): void {
    this.api.getUrl(this.urlChuck).subscribe(
      (data) => {
        this.joke = data;
        this.jokeNotFound = false;
        console.log(data);
      }
      
    )
    this.loadPics();
  }
  
}