import City from "../../models/City.js";

export const deleteCity = async (req, res, next) => {
    try {
        await City.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "City deleted successfully" });
    } catch (error) {
        next(error);
    }
};
