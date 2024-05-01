import { Property } from "./property.model";

export class Offer {
    offerId: String;
    property: Property;
    startDate: string;
    endDate: string;


    constructor( offreId: String, property: Property, startDate: string, endDate: string) {
      this.offerId=offreId;
      this.property = property;
      this.startDate=startDate;
      this.endDate=endDate;
    }

  
   
  }
  