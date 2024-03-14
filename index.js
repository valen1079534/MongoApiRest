import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import ClienteRutaVDL from "./src/Routers/Router.clienteVDL.js";
import articulosRutaVDL  from "./src/Routers/Router.articulosVDL.js";
import alquilerRutaVDL from "./src/Routers/Router.alquilerVDL.js";
import usuarioRutaVDL from "./src/Routers/Router.usuarioVDL.js";
import rutaInteresVDL from "./src/Routers/Router.interesevdl.js";
import { dbconnect } from "./src/database/conexion.js";

const appVDL = express()

appVDL.use(express.json())
appVDL.use(morgan('dev'))
appVDL.use(cookieParser())

appVDL.use('/clienteVDL', ClienteRutaVDL)
appVDL.use('/articulosVDL', articulosRutaVDL)
appVDL.use('/alquilerVDL', alquilerRutaVDL)
appVDL.use('/usuarioVDL',usuarioRutaVDL)
appVDL.use('/intereseVDL', rutaInteresVDL)

dbconnect()
appVDL.listen(2000, () =>{
    console.log("Servidor corriendo")
})
