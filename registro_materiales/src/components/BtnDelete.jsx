"use client";
/*router de next */
import { useRouter } from 'next/navigation';

/*  dentro de next se puede o no poner esta importanción
import React from 'react' */
/* sweet alert 2 */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const uri = 'http://localhost:3000/api/materiales'

const BtnDelete = ({id}) => {

    const router = useRouter();
    /* mi propio sweetalert */
    const MySwal = withReactContent(Swal)

    const eliminarDocumento = () => {
        MySwal.fire({
            title: "Esta seguro de querer eliminar este material?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Si eliminalo"
          }).then(async (result) => {
            if (result.isConfirmed) {
              const eliminar = await fetch(`${uri}/${id}`, {method:'DELETE'})
              if(eliminar.ok){
                router.refresh()
              }
              Swal.fire({
                title: "Eliminado!",
                text: "Tu Material a sido eliminado",
                icon: "success"
              });
            }
          });
    }

  return (
    <button 
        onClick={eliminarDocumento}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none"
    >
        Eliminar
    </button>
  )
}

export default BtnDelete