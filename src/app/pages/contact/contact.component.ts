import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  firstname = '';
  lastname = '';
  email = '';
  message = '';

  onSubmit(formData:any){
    let score = 0;
    let max = 3;
    let errorMessage = '';

    formData.firstname.length > 2 ? score++ : errorMessage += "First name is too short !\n";
    formData.lastname.length > 2 ? score++ : errorMessage += "Last name is too short !\n";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)){
       score++
    }else{
      errorMessage += "Email must be a valid address\n";
    }

    

    let validation = score === max ? true : false;

    if(validation){
      console.log("Youpi ! Le formulaire est bien rempli ",formData);
    }else{
      alert('Ouuups an error occured !\n' + errorMessage)
    }
  }

  ngOnInit(): void {
    this.settings.displayCarousel= false;
  }


}
