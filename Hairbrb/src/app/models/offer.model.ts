
export class Offer {


    propertyId: string;
    location: string;
    availability: string;
    price: number;
    currency!: '€';
    rating: number;
    bl_stars: number [];
    wh_stars: number [];
    constructor( propertyId: string, location: string, availability: string,  price: number, rating: number) {
      this.propertyId = propertyId;
      this.location=location;
      this.availability=availability;
      this.price= price;
      this.rating=rating;
      this.bl_stars=this.createArray(rating);
      this.wh_stars= this.createArray(5-rating);
    }
  

    createArray(num: number): any[] {
      return Array(num).fill(0);
    }
  
   
  }
  