import ClienteVDL from './../Model/Model.ClientesVDL.js';
import InteresVDL from './../Model/Model.interesVDL.js';
import AlquilerVDL from './../Model/Model.alquilerVDL.js';
import ArticulosVDL from './../Model/Model.articulosVDL.js';

export const interesPagadosVDL = async (req, res) =>{
    try {
        const clientesV = await ClienteVDL.find().populate('nombres').lean()
        const interesV = await InteresVDL.find().populate('valor').lean()
        const alquilerV = await AlquilerVDL.find({estado:{$eq: "pagado"}}).populate('mes', 'valor').lean()
        const articulosV = await ArticulosVDL.find().populate('nombre').lean()

        const combinacionControllerVDL = {
            clientesV,
            interesV,
            alquilerV,
            articulosV
        }

        if(combinacionControllerVDL){
            res.status(200).json(combinacionControllerVDL)
        }else{
            res.status(404).json({Message: "Error combinacion" + error})
        }
    } catch (error) {
        res.status(500).json({Message: "ERROR EN EL SERVIDOR" + error})
    }
}

export const interesPendienteVDL = async (req, res) => {
    try {
        const {id} = req.params

        const interesP = await InteresVDL.find({
            alquiler: id,
            estado: "no pagado"
        })


        if(interesP.length>0){
            const totalMes = {}

            interesP.foreach(interesV => {
                const {mes, valor} = interesV
                if(!totalMes)
                {
                    totalMes[mes] = valor
                }else
                {
                    totalMes[mes] += valor}  
            })
            res.json({Message: totalMes})
        }else{
            res.json({Message: "No hay intereses pendientes"})
        }
    } catch (error) {
        res.status(500).json({message: "ERROE EN EL SERVIDOR"})
    }
}

export const InteresRecaudadosVDL = async (req, res) => {
    try {
        const {mes} = req.body

        const interesR = await InteresVDL.find({
            fecha: mes,
            estado: "pagado"
        })
        if(interesR.length === 0){
            res.json({Message: "No hay intereses pagos por este mes"})
        }else{
            let recaudado = 0
            interesR.foreach(interesR => {
                recaudado += interesR.valor
            })

            res.json({Message: `Total ${mes}:` + recaudado})
        }
    } catch (error) {
        res.status(500).json({Message:"ERRORR SERVIDOR" + error})
    }
}
