import express from 'express';
import { createCity } from '../controllers/cities/create.js';
import { getCities, getCityById } from '../controllers/cities/read.js';

const router = express.Router();

// Definir las rutas
router.get('/AllCities', getCities);
router.get('/CitiesByID/:id', getCityById);
router.post('/CreateCity', createCity);

export default router;
