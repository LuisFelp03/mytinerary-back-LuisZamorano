import Itinerary from "../../models/Itinerary.js";

export const createItinerary = async (req, res, next) => {
    try {
        const newItinerary = await Itinerary.create(req.body);
        return res.status(201).json({ response: newItinerary });
    } catch (error) {
        next(error);
    }
};
