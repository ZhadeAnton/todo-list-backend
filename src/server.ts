import express from "express";
import morgan from "morgan";
import cors from "cors"
require('dotenv').config()

const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'hello!'})
})

export default app;
