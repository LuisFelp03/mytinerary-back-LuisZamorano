import Itinerary from "../../models/Itinerary.js";

export const getAllItineraries = async (req, res, next) => {
    try {
        const itineraries = await Itinerary.find({});
        return res.status(200).json({ response: itineraries });
    } catch (error) {
        next(error);
    }
};

export const getItineraryById = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        return res.status(200).json({ response: itinerary });
    } catch (error) {
        next(error);
    }
};
