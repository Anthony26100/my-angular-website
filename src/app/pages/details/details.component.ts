import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, public api:ApiService) { }
  itemId = 0;
  itemInfo:any;
  imgSrc='./assets/images/loader.gif';
  gray= false;
  blur = 0;

  generateSrc(id=this.itemId,gray=false,blur=0){
    this.imgSrc = this.api.bigImgPicsum(this.itemId);
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

  delBlur(){
    this.blur>0?this.blur--:this.blur=0;
    this.generateSrc();
  }
  

  ngOnInit(): void {
    // On recuperer l'id dans la route active.
    this.itemId = this.route.snapshot.params['itemId'];
    // On charge les données correspondantes à l'image.
    this.api.getUrl(this.api.imgInfo(this.itemId)).subscribe( (data) =>{
      this.itemInfo = data;
      this.generateSrc();
    }
    );
  }

}
