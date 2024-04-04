import React, { useState } from 'react'

const Formcomponent = () => {
    const [name,setName] = useState()
    const [lastname, setLastname] = useState()
    const [array, setArray] = useState([])

    const registerUser = (e) => {
        e.preventDefault()

        //Validar datos
        if (!name) return alert('Ingrese un nombre')
        if (!lastname) return alert('Ingrese un apellido')

        //Guardar datos
        setArray([
            ...array,
            {name, lastname}
        ])

        //Limpiar estados
        e.target.reset()
        setName('')
        setLastname('')
    }
    return (
        <div>
            <h1 className='text-center text-info'>Formulario de registro de usuarios</h1>
            <form onSubmit={registerUser}>
                <input type="text" 
                 placeholder='Ingrese su nombre'
                 className='form-control mb-3'
                 onChange={(e) => setName(e.target.value.trim())}
                 value={name}
                />
                <input type="text" 
                 placeholder='Ingrese apellido'
                 className='form-control mb-3'
                 onChange={(e) => setLastname(e.target.value.trim())}
                 value={lastname}
                />
                <div className='d-grid gap-2'>
                    <button type='submit' className='btn btn-outline-primary'>Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default Formcomponent