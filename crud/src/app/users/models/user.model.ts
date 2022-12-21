import { Address } from './address.model';
import { Contact } from './contact.model';

export interface User {
  id: string;
  name: string;
  profession: string;
  birthDate: string;
  documentNumber: string;
  address: Address;
  contact: Contact;
}
