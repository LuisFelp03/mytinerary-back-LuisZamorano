import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Obtener la URL de conexión desde las variables de entorno
const url = process.env.URI_MONGO;

// Función para conectar a la base de datos
const connectDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1); // Salir del proceso en caso de error de conexión
    }
};

export default connectDatabase;
