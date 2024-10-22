import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import error_handler from './middlewares/error_handler.js';
import not_found_handler from './middlewares/not_found_handler.js';
import './config/dataBase.js';
import routerIndex from './router/index.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

// Rutas
server.use('/api', routerIndex);

// Manejador de rutas no encontradas (va después de las rutas)
server.use(not_found_handler);

// Manejador de errores (va después de las rutas)
server.use(error_handler);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
