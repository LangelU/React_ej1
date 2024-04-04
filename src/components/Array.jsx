import React, { useState } from 'react'

const Array = () => {
    const users = [
        {id: 1, name: 'Luis'},
        {id: 2, name: 'Brayan'},
        {id: 3, name: 'Alberto'}
    ]
    const [array, setArray] = useState(users)
    const addItem = () => {
        setArray([
            ...array, //Deja el array que estaba, añadiendo un nuevo item
            {id: 4, name: 'José'}
        ])
    }
    return (
        <div>
            <h1>Componente de listas</h1>
            {
                array.map((item)=> (<li key = {item.id}> {item.name} </li>))
            }
            <button onClick={addItem}>Agregar</button>
        </div>
    )
}

export default Array