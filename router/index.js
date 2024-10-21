import express from 'express';
import AllCities from './cities.js'


const router = express.Router();

router.use('/city', AllCities)


export default router;
