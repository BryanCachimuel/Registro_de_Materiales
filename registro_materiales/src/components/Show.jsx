import Link from 'next/link'
import React from 'react'
import BtnDelete from './BtnDelete'

/* {cache:"no-store"} -> se utiliza para controlar el almacenamiento en la caché de 
                        de una página o ruta específica
*/
const obtenerDatos = async () => {
    try {
        const datos = await fetch(process.env.URI, {cache:"no-store"})
        return datos.json()
    } catch (error) {
        console.log("Error: " , error)
    }
}

/*const {data} = await obtenerDatos()
console.log(data)*/

const Show = async ()  => {
    const {data} = await obtenerDatos()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {data.map((element)=> (
            <div className="p-3 shadow-lg shadow-indigo-500/50 my-4 flex justify-between gap-4 items-start">
                <div>
                    {/*<p>{element._id}</p>*/}
                    <h2 className="font-bold text-2xl text-slate-700">{element.nombre}</h2>
                    <p>{element.descripcion}</p>
                    <p>{element.tipo_material}</p>
                    <p>{element.cantidad}</p>
                    <p>$ {element.precio}</p>
                </div>

                {/* botones de acciones */}
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link href={`/edit/${element._id}`} 
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-violet-400 rounded-lg hover:bg-violet-600 focus:ring-4 focus:outline-none">
                        Actualizar
                    </Link>
                    <BtnDelete id={element._id}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Show