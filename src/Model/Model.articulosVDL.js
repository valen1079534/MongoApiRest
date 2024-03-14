import { mongoose } from 'mongoose';

const articulosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true,
    },

    tipo:{
        type:String,
        required: true,
    }
})

const ArticulosVDL = mongoose.model('Articulos', articulosSchema)
export default ArticulosVDL