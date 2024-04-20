import connectDB from '@/lib/db';
import { NextResponse } from 'next/server';
import { MaterialModel } from '@/models/Material';

export const POST = async (req, res) => {
    await connectDB()
    try {
        const body = await req.json()
        const nuevoMaterial = await MaterialModel.create(body)
        return NextResponse.json({data:nuevoMaterial}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}

export const GET = async () => {

}
