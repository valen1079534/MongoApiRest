import Interes from "../Model/Model.interesVDL.js";

export const postInteresVDL = async (req, res) =>{
    try {
        const resultado = await Interes.create(req.body)

        if(resultado){
            res.status(200).json({Message: 'Interes registrado'})
        }else{
            res.status(404).json({Message: 'Registro de interes no autorizado'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error del servidor' + error})
    }
}

export const deleteInteresVDL = async (req, res) =>{
    try {
        const resultado = await Interes.findByIdAnDelete(req.params.id)

        if(resultado){
            res.status(200).json({Message: 'El interes se elimino con exitos'})
        }else{
            res.status(404).json({Message:'No se elimino el interes'})
        }
    } catch (error) {
        res.status(500).json({Message:'Error del servidor' + error})
    }
}