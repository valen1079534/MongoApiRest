import AlquilerVDL from "../Model/Model.alquilerVDL.js";

export const postAlquilerVDL = async (req, res) =>{
    try {
        const resultado = await AlquilerVDL.create(req.body)

        if(resultado){
            res.status(200).json({Message: 'Alquiler registado con exito'})
        }else{
            res.status(404).json({Message: 'Fallo registro alquiler'})
        }
    } catch (error) {
        res.status(500).json({Message: 'Error servidor' + error})
    }
}

export const putAlquilerVDL = async (req, res) => {
    try {
        const resultado = await AlquilerVDL.findByIdAndUpdate(req.params.id, req.body)

        if(resultado){
            res.status(200).json({Message: 'Actualizacion de alquiler con exito'})
        }else{
            res.status(404).json({Message: 'Fallo actualizacion de alquiler'})
        }
    } catch (error) {
        res.status(500).json({Message:'Error servidor' + error})
    }
}