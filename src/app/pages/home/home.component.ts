import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public api:ApiService, public settings:SettingsService) { }

  
  title ="Home";
  myColor = "red"
  myValue = false;
  // déclaration du tableau 
  arrayImg = ['ciseaux.png','feuille.png','pierre.png'];
  jsonImg = [{url:'ciseaux.png',
            alt:"Avenue dans les bois...."},
            {url:'feuille.png',
            alt:"Avenue dans les rues"},
            {url:'pierre.png',
            alt:"Avenue dans les petarade"}];
  // Dévlaration de propriétés utilisées dans mon code
  randomIndex = 0;
  sourceImg = '';
  compteur = 0;
  
  myAlert(msg : string){
    alert(msg);
  }

  changeImage(){
    // On tire un nombre aléatoire entre 0 et 2
    this.randomIndex = Math.floor(Math.random()*3);
    this.sourceImg = this.arrayImg[this.randomIndex];
    this.compteur++
    console.log('Nombre de changement de source : ' + this.compteur);
    console.log('Nombre de changement de source : ' + this.sourceImg);
  }

  ngOnInit(): void {
     this.changeImage();
     this.settings.displayCarousel = true;
     
  }

  ngOnDestroy(): void{
    console.log("Au revoir la home");
  }
}
