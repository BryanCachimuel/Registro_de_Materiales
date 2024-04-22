"use client"
import Form from '@/components/Form'
import { useRouter } from 'next/navigation';
import React from 'react'

const uri = "http://localhost:3000/api/materiales";

const obtenerDatosporId = async (id) => {
    try {
        const datos = await fetch(`${uri}/${id}`, {cache:"no-store"})
        if(!datos.ok){
            throw new Error("Fallo al Obtener los Datos del Material")
        }
        return datos.json()
    } catch (error) {
        console.log("Error: " , error)
    }
}


const Editar = async ({params}) => {

    const router = useRouter()
    const id = params.id
    const {data} = await obtenerDatosporId(id)
    //console.log("Documento: " + JSON.stringify(data))

    const onSubmitEdit = async (formData) => {
        const {nombre, descripcion, tipo_material, cantidad, precio} = formData
        try {
            const datosEditar = await fetch(`${uri}/${id}`,{
                method:'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify({nombre:nombre,
                                     descripcion:descripcion, 
                                     tipo_material:tipo_material, 
                                     cantidad:cantidad, 
                                     precio:precio})
            })
            if(!datosEditar.ok){
                throw new Error("Fallo en la actualización del material")
            }
            router.refresh()
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Form onSubmitForm={onSubmitEdit} formValues={data}/>
    </div>
  )
}

export default Editar