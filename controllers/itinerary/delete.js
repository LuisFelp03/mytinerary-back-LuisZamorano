import Itinerary from "../../models/Itinerary.js";

export const deleteItinerary = async (req, res, next) => {
    try {
        await Itinerary.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Itinerary deleted successfully" });
    } catch (error) {
        next(error);
    }
};
