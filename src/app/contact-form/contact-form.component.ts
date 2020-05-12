import {Component, OnInit} from '@angular/core'
import {IContact} from '../interface/IContact'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: IContact
  isAddingState: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    console.log(this.contact)
  }
}
