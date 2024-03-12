import express from "express";
import mongoose, { get } from "mongoose"

const appValentina = express()

appValentina.get("/", (req, res) =>{
    res.send("hola")
})

appValentina.listen(2000, () => console.log('servidor funcional'))