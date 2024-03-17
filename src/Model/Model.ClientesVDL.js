import { mongoose } from 'mongoose';

const clienteSchema = mongoose.Schema({
    nombres:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    fecha_nac:{
        type:Date,
        required:true
    }
})

const ClienteVDL = mongoose.model('ClienteVDL', clienteSchema)
export default ClienteVDL