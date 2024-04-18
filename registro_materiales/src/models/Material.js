import mongoose from 'mongoose';

// crear un esquema
const materialSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: [true, "Por favor complete el Campo"]
        },
        descripcion:{
            type: String,
            required: [true, "Por favor complete el Campo"]
        },
        tipo_material:{
            type: String,
            required: [true, "Por favor complete el Campo"]
        },
        cantidad:{
            type: Number,
            required: [true, "Por favor complete el Campo"]
        },
        precio:{
            type: Number,
            required: [true, "Por favor complete el Campo"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// crear el modelo a partir del esquema
export const MaterialModel = mongoose?.models?.Material || mongoose.model("Material",materialSchema)