"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const TourDetail_1 = require("../../model/TourDetail");
const static_1 = require("../general/static");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = data_1.DataStore.tours.find((element) => element.id == tourID);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(static_1.fileMapper(req.app.get('env')));
        const selectedReviews = data_1.DataStore.reviews.filter((item) => item.tourID == tourID);
        res.json(new TourDetail_1.TourDetail(selectedTour, selectedReviews, imageUrls));
    }
    else {
        res.json({ "status": "failed", "message": "Element not found" });
    }
};
