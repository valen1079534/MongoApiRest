import JMW from "jsonwebtoken";
import UsuarioVDL from "../Model/Model.usuarioVDL.js";
import { dbconnect } from "../database/conexion.js";

export const validarUsuario = async (req, res) =>{
    let {identificacion, password} = req.body

    let rows = await UsuarioVDL.finOne(identificacion, password)

    if(!rows){
        res.status(200)
    }
}