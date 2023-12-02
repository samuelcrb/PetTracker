

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

    const {nombreMascota,nombrePropietario,email,fechaAlta,sintomas,id} = paciente 

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (

        <div className="m-3 px-5 py-10 rounded-md bg-white shadow-md">

                    <p className="font-bold mb-3 text-gray-700 uppercase">Nobre: {''}
                        <span className="font-normal normal-case">{nombreMascota}</span>
                    </p>
                    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                        <span className="font-normal normal-case">{nombrePropietario}</span>
                    </p>
                
                    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                        <span className="font-normal normal-case">{email}</span>
                    </p>
                
                
                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
                        <span className="font-normal normal-case">{fechaAlta}</span>
                    </p>
                
                
                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                        <span className="font-normal normal-case">{sintomas}</span>
                    </p>

                    <div className="flex justify-between mt-10">
                        <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700
                        text-white rounded-md font-bold" onClick={() => {setPaciente(paciente)}}>
                            Editar
                        </button>

                        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700
                        text-white rounded-md font-bold" onClick={handleEliminar}>
                            Eliminar
                        </button>
                    </div>
        </div>
    )
}

export default Paciente