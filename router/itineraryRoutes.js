import express from "express";
import { createItinerary } from "../controllers/itinerary/create.js";
import { getAllItineraries, getItineraryById } from "../controllers/itinerary/read.js";
import { updateItinerary } from "../controllers/itinerary/update.js";
import { deleteItinerary } from "../controllers/itinerary/delete.js";

const router = express.Router();

// Rutas para crear itinerarios
router.post("/", createItinerary); // Crear un itinerario

// Rutas para leer itinerarios
router.get("/", getAllItineraries); // Obtener todos los itinerarios
router.get("/:id", getItineraryById); // Obtener un itinerario por ID

// Rutas para actualizar y eliminar itinerarios
router.put("/:id", updateItinerary); // Actualizar un itinerario por ID
router.delete("/:id", deleteItinerary); // Eliminar un itinerario por ID

export default router;
