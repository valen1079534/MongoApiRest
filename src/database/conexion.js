import mongoose from "mongoose"

export const dbconnect = async () => {
    
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/prenderiaVDL")
        console.log('Conexion exitosa')
    } catch (error) {
        console.log('ERROR EN CONEXION BASE DE DATOS', error )
    }
}

export const SECRET_TOKEN = 'tokenmongoosevdl'