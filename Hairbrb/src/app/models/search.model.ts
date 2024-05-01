export interface Search{
    startDate? :string;
    endDate? :string;
    minBedrooms?:number;
    minBeds?: number;
    maxPrice?: number;
    maxDistance?:number;
    city?:string;
    country:string;
    minRating?: number;
}