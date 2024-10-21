import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import './config/dataBase.js';
import routerIndex from './router/index.js'


dotenv.config();

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/api', routerIndex)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
