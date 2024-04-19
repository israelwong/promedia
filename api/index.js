import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config.js";
import "./config.js";

import colaborador from "./routes/colaboradores.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//! routes
app.use("/api", colaborador);

//funcion middlewhere si no encuentra la routa
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
  res.status(404).json({ message: "Endpoint not found:" });
});

app.listen(PORT);
// console.log("listening on port " + PORT);
