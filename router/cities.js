import express from 'express';
import { createCity, updateCity, deleteCity } from '../controllers/cities/create.js';
import { getCities, getCityById } from '../controllers/cities/read.js';

const router = express.Router();

// Definir las rutas
router.post('/CreateCity', createCity);           // Cargar una ciudad
router.get('/AllCities', getCities);              // Obtener todas las ciudades
router.get('/CityByID/:id', getCityById);         // Obtener una ciudad por ID
router.put('/UpdateCity/:id', updateCity);        // Modificar una ciudad
router.delete('/DeleteCity/:id', deleteCity);     // Borrar una ciudad

export default router;
