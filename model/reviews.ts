export class Review {
    tourID: string
    reivewTitle: string
    reviewLongText: string
    stars: Number
    constructor(data:any){
        this.tourID = data.tourID
        this.reivewTitle = data.reivewTitle
        this.reviewLongText = data.reviewLongText
        this.stars = data.stars
    }
}