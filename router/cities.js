import express from "express";
import { createCity, createMultipleCities } from "../controllers/cities/create.js";
import { getAllCities, getCityById } from "../controllers/cities/read.js";
import { updateCity } from "../controllers/cities/update.js";
import { deleteCity } from "../controllers/cities/delete.js";

const router = express.Router();

// Rutas para crear ciudades
router.post("/", createCity); // Crear una ciudad individual
router.post("/bulk", createMultipleCities); // Crear múltiples ciudades

// Rutas para leer ciudades
router.get("/", getAllCities); // Obtener todas las ciudades o buscar por nombre
router.get("/:id", getCityById); // Obtener una ciudad por ID

// Rutas para actualizar y eliminar ciudades
router.put("/:id", updateCity); // Actualizar una ciudad por ID
router.delete("/:id", deleteCity); // Eliminar una ciudad por ID

export default router;
