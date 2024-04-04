import React from 'react'
import Count from './Count'

const Cardcomponent = ({wallpapersArray, count}) => {

  const styles = {
    title: {
      textAlign: 'center',
    },
    container: {
      width: '115%',
      padding: '0',
      marginLeft: '-85px'
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto',
      maxWidth: 'calc(100% - 20px)',
    },
    card: {
      margin: '5px',
      width: '200px',
    },
    cardImage: {
      width: '100%',
      height: '150px',
    },
    buttonContainer: {
      width: '90%',
      justifyContent: 'center',
      marginBottom: '10px',
      marginLeft: '10px'
    }
  };
    return (
      <div style={styles.container}>
      <h1 style={styles.title}>Galería</h1>
      <div style={styles.cardContainer}>
        {wallpapersArray.map((item, index) => (
          <div style={styles.card} key={index}>
            <div className='card grid'>
              <img className="card-img-top" src={item.url} alt="Card" style={styles.cardImage}/>
              <div className="card-body" style={{ textAlign: 'center' }}>
                <h5 className='card-title'>{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <p> Contador: {count} </p>
              </div>
              <div style={styles.buttonContainer}>
                <button className='btn btn-primary form-control'>Botón</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default Cardcomponent