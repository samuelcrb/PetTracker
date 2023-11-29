import {useState,useEffect} from 'react'

    const[nombre,setNombre] = useState('')

const Formulario = () => {

    return (
        <div className="md:w-1/2 lg:w-2/5" >
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-md py-10 px-5 mb-10" action="">

                <div className="mb-5">
                    <label htmlFor="mascota" className="blok text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>

                    <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="blok text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>

                    <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="blok text-gray-700 uppercase font-bold">
                        Email
                    </label>

                    <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email del Propietario" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="blok text-gray-700 uppercase font-bold">
                        Fecha de Alta
                    </label>

                    <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" value="" />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="blok text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>

                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"></textarea>
                </div>

                <input type="submit" value="Agregar paciente" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-all"/>
                
            </form>

        </div>
    )
}

export default Formulario