import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { handleErrors, handleInputError } from "./modules/middleware";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(handleInputError, router);
app.use(handleErrors);

export default app;
