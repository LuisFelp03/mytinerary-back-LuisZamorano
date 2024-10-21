import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Cargar las variables de entorno desde el archivo .env

const uri = process.env.URI_MONGO;

if (!uri) {
    console.error('Error: URI_MONGO no está definida en el archivo .env');
    process.exit(1);  // Cerrar la aplicación si la URI no está definida
}

// Conectar a MongoDB sin las opciones obsoletas
mongoose.connect(uri)
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch((error) => {
        console.error('Error conectando a la base de datos:', error);
    });
