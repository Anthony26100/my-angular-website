import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public http: HttpClient, private route:ActivatedRoute) { }
  itemId ='';
  itemInfo:any;
  imgSrc='';
  gray= false;
  blur = 0;

  generateSrc(id=this.itemId,gray=false,blur=0){
    this.imgSrc = 'https://picsum.photos/id/' + this.itemId + '/1280/960?'
    this.gray? this.imgSrc +='grayscale&': null;
    this.blur>0? this.imgSrc +='blur=' + this.blur : null;
    // if(this.gray){
    //   this.imgSrc +='?grayscale';

    // }else{
    //   null;
    // }
  }

  grayscale(){
    this.gray=!this.gray
    this.generateSrc();
  }

  addBlur(){
    this.blur<10?this.blur++:this.blur=0;
    this.generateSrc();
  }
  
  getUrl(url:string){
    return this.http.get(url);
  };


  ngOnInit(): void {
    // On recuperer l'id dans la route active.
    this.itemId = this.route.snapshot.params['itemId'];
    // On charge les données correspondantes à l'image.
    this.http.get('https://picsum.photos/id/'+this.itemId+'/info').subscribe( (data) =>{
      this.itemInfo = data;
      this.generateSrc(this.itemId);
    }
    );
  }

}
