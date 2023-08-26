//import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente, eliminarPaciente}) => {

 /* useEffect(()=>{
    if(pacientes.length > 0){
      console.log('Nuevo Paciente')
    }
     
  }, [pacientes])*/

  //console.log(pacientes.length === 0)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ? 
      (
        <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administrar tus {" "}
          <span className="text-indigo-600 font-bold">
            Pacientes y Citas
          </span>
        </p>
    
        { pacientes.map( paciente => ( /* (paciente, index)  key={index} */
          //<h1>{Paciente.nombre}</h1>
          <Paciente
          key = {paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        ))}
        </>
      ) : (
        <>
        <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comience Agregando Pacientes {" "}
          <span className="text-indigo-600 font-bold">
            Y Aparecerán En Este Lugar
          </span>
        </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes
