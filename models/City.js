import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    continent: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const City = mongoose.model("City", CitySchema);

export default City;
