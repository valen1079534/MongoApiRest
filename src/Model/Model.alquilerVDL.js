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
        type:Number,
        required:true
    },
    interes:{
        type: String,
        required: true
    },
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cliente'
    },
    articulo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Articulo'
    }
})

const AlquilerVDL = mongoose.model('Alquiler', alquilarSchema)
export default AlquilerVDL