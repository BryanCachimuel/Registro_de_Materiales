import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'


const Form = ({formValues, onSubmitForm}) => {

    const router = useRouter();

    const [nombre, setNombre ] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [tipo_material, setTipo_material] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [precio, setPrecio] = useState("")

    useEffect(() => {
      if(formValues){
        setNombre(formValues.nombre)
        setDescripcion(formValues.descripcion)
        setTipo_material(formValues.tipo_material)
        setCantidad(formValues.cantidad)
        setPrecio(formValues.precio)
      }
    },[formValues])

    /*para retroceder */
    const btnBack = () => {
        router.back()
    }

    /* función para el formulario de registro */
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {nombre, descripcion, tipo_material, cantidad, precio}
        onSubmitForm(formData)
    }
    

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
            className="border border-slate-500 px-8 py-2"
            type="text" 
            placeholder="Nombre del Material"
            value={nombre}
            onChange={(e) => setNombre( e.target.value)}
        />
        <input 
            className="border border-slate-500 px-8 py-2"
            type="text" 
            placeholder="Descripción del Material"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
        />
        <input 
            className="border border-slate-500 px-8 py-2"
            type="text" 
            placeholder="Tipo de Material"
            value={tipo_material}
            onChange={(e) => setTipo_material(e.target.value)}
        />
        <input 
            className="border border-slate-500 px-8 py-2"
            type="text" 
            placeholder="Cantidad de Material"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
        />
        <input 
            className="border border-slate-500 px-8 py-2"
            type="text" 
            placeholder="Precio del Material"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
        />
        <button 
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-3 px-6"
        >
            Guardar
        </button>
        <button 
            onClick={btnBack}
            type="button"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold p-3 px-6"
        >
            Cancelar
        </button>
    </form>
  )
}

export default Form