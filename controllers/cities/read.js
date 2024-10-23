import City from '../../models/City.js';

export const getCities = async (req, res) => {
    try {
        let { name, country } = req.query
        console.log(name);
        console.log(country);
        let query = {}

        if (name == true) {

            query.name = { $regex: '^' + name + '.*', $option: 'i' }

        }


        const cities = await City.find(query);
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cities", error });
    }
};

// Obtener una ciudad por ID
export const getCityById = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ message: 'City not found' });
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json({ message: 'Error getting city', error });
    }
};
