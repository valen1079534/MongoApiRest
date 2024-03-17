import { mongoose } from 'mongoose';

const articulosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true,
    },

    tipo:{
        type:String,
        enum:["Vehiculo", "Oro", "Electrodomesticos", "Maquinaria", "Herramienta"],
        required: true,
    },

    estado:{
        type:String,
        enum: ["activo", "inactivo"],
        required: true,
    }
})

const ArticulosVDL = mongoose.model('ArticulosVDL', articulosSchema)
export default ArticulosVDL