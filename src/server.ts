import express from "express";
import morgan from "morgan";
import cors from "cors"
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(router)

app.get('/', (req, res) => {
    res.json({ message: 'hello!'})
})

export default app;
