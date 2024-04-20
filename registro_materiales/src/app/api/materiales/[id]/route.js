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

