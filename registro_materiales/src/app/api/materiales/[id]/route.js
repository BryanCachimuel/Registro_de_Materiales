/* rutas para los endpoints que necesiten parámetros */
import connectDB from "@/lib/db";
import { MaterialModel } from "@/models/Material";
import { NextResponse } from "next/server";

// Mostrar un documento
export const GET = async (request, {params}) => {
    await connectDB()
    const id = params.id
    try {
        const materialEncontrado = await MaterialModel.findById(id)
        return NextResponse.json({data:materialEncontrado}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}

export const DELETE = async (request, {params}) => {
    await connectDB()
    const id = params.id
    try {
        const materialEliminar = await MaterialModel.findByIdAndDelete(id)
        if(!materialEliminar){
            return NextResponse.json({message: `Documento con ID: ${id} no encontrado`}, {status:404})
        }
        return NextResponse.json({data:materialEliminar}, {status:200})
        
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}