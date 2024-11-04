import City from "../../models/City.js";

export const getAllCities = async (req, res, next) => {
    try {
        const query = req.query.city ? { name: { $regex: `^${req.query.city}`, $options: "i" } } : {};
        const cities = await City.find(query);
        return res.status(200).json({ response: cities });
    } catch (error) {
        next(error);
    }
};

export const getCityById = async (req, res, next) => {
    try {
        const city = await City.findById(req.params.id);
        return res.status(200).json({ response: city });
    } catch (error) {
        next(error);
    }
};
