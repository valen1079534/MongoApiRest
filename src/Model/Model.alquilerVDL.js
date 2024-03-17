import { mongoose } from 'mongoose';

const alquilarSchema = mongoose.Schema({
    valor:{
        type: Number,
        required: true
    },
    fecha:{
        type:Date,
        required: true
    },
    meses:{
        type:Number,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    },
    interes:{
        type: String,
        required: true
    },
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ClienteVDL'
    },
    articulo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ArticuloVDL'
    }
})

const AlquilerVDL = mongoose.model('AlquilerVDL', alquilarSchema)
export default AlquilerVDL

