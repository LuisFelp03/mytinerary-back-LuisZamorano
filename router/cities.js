import express from 'express';
import { createCity } from '../controllers/cities/create.js';
import { getCities, getCityById } from '../controllers/cities/read.js';

const router = express.Router();

// Definir las rutas
router.get('/AllCities', getCities);           // Obtener todas las ciudades
router.get('/CitiesByID/:id', getCityById);    // Obtener una ciudad por ID
router.post('/CreateCity', createCity);        // Crear una nueva ciudad

export default router;
