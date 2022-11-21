import express, { Request, Response } from "express";
import path from "path";
import homeRoutes from "./routes/home";
import apiRoutes from "./routes/api";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRoutes);
app.use("/api", apiRoutes);

app.use((req, res) => res.status(404).send("Endpoint não encontrado"));

app.listen(process.env.SERVER_PORT);
