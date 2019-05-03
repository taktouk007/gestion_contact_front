import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/IContact';
import { ContactServiceService } from '../contact-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact : Contact;
  id: number;
  constructor(private contactService: ContactServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContact(this.id).subscribe(
      data => this.contact = data
    );
  }

}
