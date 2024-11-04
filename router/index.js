import express from "express";
import cityRoutes from "./cities.js";
import itineraryRoutes from "./itineraryRoutes.js";

const router = express.Router();

router.use("/cities", cityRoutes); // Rutas bajo el endpoint /cities
router.use("/itineraries", itineraryRoutes); // Rutas bajo el endpoint /itineraries

export default router;
