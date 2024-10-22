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

// Modificar una ciudad
export const updateCity = async (req, res) => {
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json({ message: "Error when modifying the city", error });
    }
};

// Borrar una ciudad
export const deleteCity = async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }
        res.status(200).json({ message: 'City successfully eliminated' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting city", error });
    }
};