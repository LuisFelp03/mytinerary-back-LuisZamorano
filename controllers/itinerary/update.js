import Itinerary from "../../models/Itinerary.js";

export const updateItinerary = async (req, res, next) => {
    try {
        const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ response: updatedItinerary });
    } catch (error) {
        next(error);
    }
};
