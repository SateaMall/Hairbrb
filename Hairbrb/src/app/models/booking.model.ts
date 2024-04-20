export class Booking {
    bookingId: string;
    propertyId: string;
    renterEmail: string;
    startDate: number;
    endDate: number;
    review?: string;

    constructor(
        bookingId: string,
        propertyId: string,
        renterEmail: string,
        startDate: number,
        endDate: number,
        review?: string
    ) {
        this.bookingId = bookingId;
        this.propertyId = propertyId;
        this.renterEmail = renterEmail;
        this.startDate = startDate;
        this.endDate = endDate;
        this.review = review;
    }
}