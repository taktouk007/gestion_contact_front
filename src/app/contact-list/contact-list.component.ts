import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/IContact';
import { ContactServiceService } from '../contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts : Contact[];
  constructor(private contactService: ContactServiceService,
              private router: Router) { }

  ngOnInit() {
    this.contactService.getAllContacts().subscribe( data => this.contacts = data);
  }
  deleteContact(id: number) : void {
    this.contactService.deleteContact(id).subscribe(
      data => this.ngOnInit()
    );
  }
  detailContact(id : number): void {
    this.router.navigate(['/detail/',id]);
  }
}
