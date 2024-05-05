export class Property {
    
    propertyId: string;
    ownerEmail: string;
    city: string;
    street: string;
    postalCode: string;
    beds: number;
    bedrooms: number;
    distance: number; //en km dans le backend et en m dans le front 
    price: number;
    bl_stars: number [];
    wh_stars: number [];
    rating: number;
    imageUrl: string;
    constructor(
      propertyId: string,
      ownerEmail: string,
      city: string,
      street: string,
      postalCode: string,
      beds: number,
      bedrooms: number,
      distance: number,
      price: number,
      rating: number,
      imageUrl: string
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
      this.rating=rating;
      this.bl_stars=this.createArray(rating);
      this.wh_stars= this.createArray(5-rating);
      this.imageUrl=imageUrl;
    }
    

    createArray(num: number): any[] {
      return Array(num).fill(0);
    }
    getFullAddress(): string {
      return `${this.street}, ${this.city}, ${this.postalCode}`;
    }
}