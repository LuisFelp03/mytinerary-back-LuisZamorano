import City from "../../models/City.js";

export const createCity = async (req, res, next) => {
    try {
        const newCity = await City.create(req.body);
        return res.status(201).json({ response: newCity });
    } catch (error) {
        next(error);
    }
};

export const createMultipleCities = async (req, res, next) => {
    try {
        const cities = await City.insertMany(req.body);
        return res.status(201).json({ response: cities });
    } catch (error) {
        next(error);
    }
};
