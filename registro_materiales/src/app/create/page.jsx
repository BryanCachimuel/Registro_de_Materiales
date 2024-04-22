"use client";
import Form from '@/components/Form'
import { useRouter } from 'next/navigation'
import React from 'react'

const uri = "http://localhost:3000/api/materiales";

const Crear = () => {

    const router = useRouter()

    const onSubmitCreate = async (formData) => {
        console.log("Datos capturados: " + JSON.stringify(formData))
        const {nombre, descripcion, tipo_material, cantidad, precio} = formData
        try {
            const datosMaterial = await fetch(uri, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body:JSON.stringify({nombre:nombre,
                                     descripcion:descripcion, 
                                     tipo_material:tipo_material, 
                                     cantidad:cantidad, 
                                     precio:precio})
            })
            if(datosMaterial.ok){
                router.refresh();
                router.push("/")
            }else{
                throw new Error("Fallo al Crear el Material")
            }
        } catch (error) {
           console.log(error) 
        }
    }

  return (
    <div>
        <Form onSubmitForm={onSubmitCreate}/>
    </div>
  )
}

export default Crear