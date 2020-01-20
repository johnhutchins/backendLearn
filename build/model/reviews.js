"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Review {
    constructor(data) {
        this.tourID = data.tourID;
        this.reivewTitle = data.reivewTitle;
        this.reviewLongText = data.reviewLongText;
        this.stars = data.stars;
    }
}
exports.Review = Review;
