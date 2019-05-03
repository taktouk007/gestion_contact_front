import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/IContact';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact : Contact = {id:0,nom:"",prenom:"",email:"",dateNaissance:null,tel:"",imageUrl:""}
  constructor(private contactService : ContactServiceService,
              private router: Router) { }

  ngOnInit() {
  }
  
  saveContact() : void {
    this.contactService.saveContact(this.contact).subscribe(
      data => this.router.navigate(['/contacts'])
    );
  }

}
