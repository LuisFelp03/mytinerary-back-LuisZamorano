import City from '../../models/City.js';

// Crear una nueva ciudad
export const createCity = async (req, res) => {
    const { name, photo, country, continent, description, currency } = req.body;

    const newCity = new City({
        name,
        photo,
        country,
        continent,
        description,
        currency
    });

    try {
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(500).json({ message: 'Error creating city', error });
    }
};
