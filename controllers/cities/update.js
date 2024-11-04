import City from "../../models/City.js";

export const updateCity = async (req, res, next) => {
    try {
        const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ response: updatedCity });
    } catch (error) {
        next(error);
    }
};
