import { Router } from "express";
import { validarUsuarioVDL } from "../Controllers/controller.autenticacionVDL";

const rutaAutenticacionVDL = Router()

rutaAutenticacionVDL.post('/autenticacion', validarUsuarioVDL)

export default rutaAutenticacionVDL
