import City from '../../models/City.js';

export const getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cities", error });
    }
};

// Obtener una ciudad por ID
export const getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ message: 'Ciudad no encontrada' });
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la ciudad', error });
    }
};
