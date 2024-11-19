import express from "express";
import connectDatabase from "./config/dataBase.js";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./router/index.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Conectar a la base de datos
connectDatabase();

// Rutas
app.use("/api", routes); // Prefijo "/api" para todas las rutas

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});