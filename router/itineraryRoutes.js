import express from "express";
import { createItinerary } from "../controllers/itinerary/create.js";
import { getAllItineraries, getItineraryById, getItinerariesByCityId } from "../controllers/itinerary/read.js";
import { updateItinerary } from "../controllers/itinerary/update.js";
import { deleteItinerary } from "../controllers/itinerary/delete.js";

const router = express.Router();

router.post("/", createItinerary);

router.get("/", getAllItineraries);
router.get("/city/:cityId", getItinerariesByCityId);
router.get("/:id", getItineraryById);

router.put("/:id", updateItinerary);
router.delete("/:id", deleteItinerary);

export default router;
