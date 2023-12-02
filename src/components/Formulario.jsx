import {useState,useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

    const[nombreMascota,setNombreMascota] = useState('')
    const[nombrePropietario,setNombrePropietario] = useState('')
    const[email,setEmail] = useState('')
    const[fechaAlta,setFechaAlta] = useState('')
    const[sintomas,setSintomas] = useState('')

    const[error,setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){

            setNombreMascota(paciente.nombreMascota)
            setNombrePropietario(paciente.nombrePropietario)
            setEmail(paciente.email)
            setFechaAlta(paciente.fechaAlta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion del formulario

        if([nombreMascota,nombrePropietario,email,fechaAlta,sintomas].includes('')){
            console.log('Hay almenos un campo vacío')
            setError(true)
            return
        }
        setError(false)

        //Objeto paciente
        const objetoPaciente = {
            nombreMascota,
            nombrePropietario,
            email,
            fechaAlta,
            sintomas
        }

        if(paciente.id){

            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})

        }else{
            objetoPaciente.id = generarId()
            setPacientes([
                ...pacientes,
                objetoPaciente
            ])
        }
        

        setNombreMascota('')
        setNombrePropietario('')
        setEmail('')
        setFechaAlta('')
        setSintomas('')
    }
            
    
    


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 my-3" >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-10" action="">
                {error && <Error>Todos los campos son obligatorios</Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="blok text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>

                    <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" value={nombreMascota} onChange={(e) => setNombreMascota(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="blok text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>

                    <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" value={nombrePropietario} onChange={(e) => setNombrePropietario(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="blok text-gray-700 uppercase font-bold">
                        Email
                    </label>

                    <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email del Propietario" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="blok text-gray-700 uppercase font-bold">
                        Fecha de Alta
                    </label>

                    <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value={fechaAlta} onChange={(e) => setFechaAlta(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="blok text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>

                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>

                <input type="submit" value={paciente.id ? "Editar paciente" : "Agregar paciente"} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all"/>
                
            </form>

        </div>
    )
}

export default Formulario