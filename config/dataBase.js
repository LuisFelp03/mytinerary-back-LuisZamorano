import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Obtener la URL de conexión desde las variables de entorno
const url = process.env.URI_MONGO;

// Función para conectar a la base de datos
const connectDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Salir del proceso en caso de error de conexión
    }
};

export default connectDatabase;
