import { Injectable } from '@angular/core'
import { IContact } from '../interface/IContact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  add(contact: IContact): void {
    contacts.push(contact)
  }

  getAll(): IContact[] {
    return contacts
  }

}

const contacts: IContact[] = [
  {id: 1, name: 'Vasya', lastName: 'Vasin', age: 20},
  {id: 2, name: 'Petya', lastName: 'Vasin', age: 22},
  {id: 3, name: 'Masha', lastName: 'Vasina', age: 21},
  {id: 4, name: 'Tanya', lastName: 'Vasina', age: 19},
  {id: 5, name: 'Tel', lastName: 'Ranov', age: 25}
]
