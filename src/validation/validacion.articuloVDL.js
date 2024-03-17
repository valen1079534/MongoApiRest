import { check } from "express-validator";

export const articuloValidacionVDL = [
    check("nombre", "El nombre es requerido, maximo 50 caracteres").not().isEmpty().isLength({max:100}),

    check("tipo").not().isEmpty().custom((value)=>{
        const tipo = ["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"]
        if(!tipo.includes(value)){
            throw new Error('Tipo incorrecto, vuelve a ingresarlo')
        }
        return true
    }),

    check("estado").not().isEmpty().custom((value) => {
        const estado = ["activo", "inactivo"]
        if(!estado.includes(value)){
            throw new Error('Estado incorrecto')
        }
    })
]