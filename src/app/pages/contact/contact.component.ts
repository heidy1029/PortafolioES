import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showContact = false;

  toggleContact() {
    this.showContact = !this.showContact;
  }

  openEmail() {
    window.location.href = "mailto:heidy1029diaz@gmail.com";
  }
}
