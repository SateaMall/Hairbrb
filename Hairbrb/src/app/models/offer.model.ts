
export class Offer {
    offerId: string;
    propertyId: string;
    startDate: number; 
    endDate: number;
  
    constructor(offerId: string, propertyId: string, startDate: number, endDate: number) {
      this.offerId = offerId;
      this.propertyId = propertyId;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  
  
    getDurationInDays(): number {
      const MS_PER_DAY = 1000 * 60 * 60 * 24;
      return Math.floor((this.endDate - this.startDate) / MS_PER_DAY);
    }
  
   
  }