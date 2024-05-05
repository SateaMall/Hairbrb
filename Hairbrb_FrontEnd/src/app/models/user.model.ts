export class User {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;  // Optional because not all users may have a phone number
  
    constructor(
      email: string,
      firstName: string,
      lastName: string,
      phone?: string
    ) {
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
  }