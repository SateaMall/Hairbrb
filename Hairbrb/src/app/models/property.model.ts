export class Property {
    propertyId: string;
    ownerEmail: string;
    city: string;
    street: string;
    postalCode: string;
    beds: number;
    bedrooms: number;
    distance: number;
    price: number;
  
    constructor(
      propertyId: string,
      ownerEmail: string,
      city: string,
      street: string,
      postalCode: string,
      beds: number,
      bedrooms: number,
      distance: number,
      price: number
    ) {
      this.propertyId = propertyId;
      this.ownerEmail = ownerEmail;
      this.city = city;
      this.street = street;
      this.postalCode = postalCode;
      this.beds = beds;
      this.bedrooms = bedrooms;
      this.distance = distance;
      this.price = price;
    }
  
    // Example method to get full address
    getFullAddress(): string {
      return `${this.street}, ${this.city}, ${this.postalCode}`;
    }
}