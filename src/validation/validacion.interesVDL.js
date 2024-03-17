import { check } from "express-validator";

export const interesValidacionRegistroVDL = [
    check("mes", "El mes es de caracter numerico").not().isEmpty().isNumeric(),

    check("fecha", "Fecha es de caracter AA/MM/DD").not().isEmpty(),

    check("valor", "El valor es requerido, maximo 10 caracteres").not().isEmpty().isLength({max:10}),

    check("alquiler", "Alquiler requerido").not().isEmpty(),

    check("estado").not().isEmpty().custom((value) => {
        const estado = [ "pagado", "no pagado"]
        if(!estado.includes(value)){
            throw new Error('Estado incorrecto')
        }
        return true
    })
]

