import { Property } from "./property.model";

export class Offer {
    offerId: String;
    property: Property;
    startDate: Date;
    endDate: Date;
  

    constructor( offreId: String, property: Property, startDate: Date, endDate: Date) {
      this.offerId=offreId;
      this.property = property;
      this.startDate=startDate;
      this.endDate=endDate;
    }

  
   
  }
  