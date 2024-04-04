import React, { useState } from 'react'
import Cardcomponent from './Cardcomponent'

const Count = ({count, setCount}) => {
    const addCount = () => { setCount(count + 1) }
    const substractCount = () => { setCount(count - 1) }
    const resetCount = () => { setCount(0) }

    const styles = {
        countContainer: {
            width: '100%',
            border: '2px solid #62C1FF',
            padding: '10px',
            borderRadius: '5px 5px 5px 5px',
            textAlign: 'center',
            marginTop: '10px'
        },
        title: {

        },
        buttonContainer: {

        }
    };

    return (
        <div style={styles.countContainer}>
            <h2 style={styles.title}>Contador</h2>
            <h3>Valor actual:{count}</h3>
            <div style={styles.buttonContainer}>
                <button onClick={addCount} className='btn btn-outline-primary'>Sumar</button>
                <button onClick={()=> setCount(count - 1)} className='btn btn-outline-primary'>Restar</button>
                <button onClick={()=>setCount(0)} className='btn btn-outline-primary'>Resetear</button>
            </div>
        </div>
    )
}

export default Count