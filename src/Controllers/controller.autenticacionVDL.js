import JMW from "jsonwebtoken";
import UsuarioVDL from './../Model/Model.usuarioVDL.js';
import { SECRET_TOKEN } from "../database/conexion.js";

export const validarUsuarioVDL = async (req, res) =>{
    try {
        const {identificacion, password} = req.body
        const usuarioTokenVDL = await UsuarioVDL.findOne({identificacion, password})

        if(!usuarioTokenVDL)
        {
            return res.status(404).json({Message: 'Usuario no se encuentra'})
        }

        if(password !== usuarioTokenVDL.password)
        {
            return res.status(404).json({Message: "Contraseña incorrecta"})
        }

        if(identificacion == usuarioTokenVDL.identificacion && password == usuarioTokenVDL.password)
        {
            const token = JMW.sing({id:usuarioTokenVDL._id}, SECRET_TOKEN)
            return res.status(200).json({identificacion:usuarioTokenVDL.identificacion, token, message:'token generado exitosamente'})
        }else
        {
            res.status(404).json({Message: 'Lo lamento el codigo no se genero'})
        }

    } catch (error) {
        res.status(500).json({Message: "Error en el servidor" + error})
    }
}

export const validarTokenVDL = (req, res, next) => { 
    const token = req.headers['token']

    if(!token){
    res.status(404).send({Message: "Token requerido"})
    }else{
        JMW.verify(token, SECRET_TOKEN, (error, decode) =>{
            if(error){
                res.status(404).json({'message': "Token incorrecto"})
            }else{
                next()
            }
        })
    }
 };
