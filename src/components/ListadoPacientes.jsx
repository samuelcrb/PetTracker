import Paciente from "./Paciente"
import { useEffect } from "react";

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

    

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen mx-5 my-3 overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente=> (
                        <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                        )
                    )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes todavía</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando un paciente y aparecera en este lugar {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                </>            
            )}
            
            


        </div>
    )
}

export default ListadoPacientes