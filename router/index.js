import express from "express";
import cityRoutes from "./cities.js";
import itineraryRoutes from "./itineraryRoutes.js";
import usersRouter from './users.js'
import usersPosts from './posts.js'
import auth from './auth.js'

const router = express.Router();

router.use("/cities", cityRoutes); // Rutas bajo el endpoint /cities
router.use("/itineraries", itineraryRoutes); // Rutas bajo el endpoint /itineraries
router.use('/users', usersRouter)
router.use('/posts', usersPosts)
router.use('/auth', auth)

export default router;
