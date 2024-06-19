import express from "express";
import morgan from "morgan";
import { autorRoute } from "./routes/autor.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use("/autor", autorRoute)

app.listen(3000, () => {
    console.log('http server running at http://localhost:3000')
})