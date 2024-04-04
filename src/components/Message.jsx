import React from 'react'

const Message = (props) => {
    return (
        <div>
            <h2>Componente Mensaje</h2>
            <h4>Hola {props.name}, su id es {props.id} </h4>
            
        </div>
    )
}

export default Message