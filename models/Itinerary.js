import mongoose from "mongoose";

const ItinerarySchema = new mongoose.Schema({
    publisherName: {
        type: String,
        required: true,
        trim: true
    },
    publisherPhoto: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    duration: {
        type: Number,
        required: true // En horas
    },
    likes: {
        type: Number,
        default: 0
    },
    hashtags: {
        type: [String],
        validate: [arrayLimit, '{PATH} debe contener entre 3 y 4 hashtags']
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    }
}, { timestamps: true });

// Función de validación para el número de hashtags
function arrayLimit(val) {
    return val.length >= 3 && val.length <= 4;
}

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

export default Itinerary;
