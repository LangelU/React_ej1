import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Compclass from './components/Compclass'
import Compfunction from './components/Compfunction'
import Count from './components/Count'
import Array from './components/Array'
import Formcomponent from './components/Formcomponent'
import Message from './components/Message'
import './App.css'
import Cardcomponent from './components/Cardcomponent'

function App() {
  const message = 'Saludos';
  const [count,setCount] = useState(0)

  const wallpapersArray = [
    {id: 1, url: 'https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg', title: 'Tarjeta uno', text: 'Montaña'},
    {id: 2, url: 'https://st5.depositphotos.com/64145070/64693/i/450/depositphotos_646930840-stock-photo-sunset-ocean-beach-beautiful-seascape.jpg', title: 'Tarjeta dos', text: 'Playa'},
    {id: 3, url: 'https://www.ifam.es/uk/wp-content/uploads/sites/15/2015/08/imagenes-de-paisajes-hermosos-4.jpg', title: 'Tarjeta tres', text: 'Valle'},
    {id: 4, url: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/7%20AdobeStock_335413355?$png$&jpegSize=200&wid=960', title: 'Tarjeta cuatro', text: 'Campo florido'},
    {id: 5, url: 'https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_917506-214429.jpg', title: 'Tarjeta cinco', text: 'Cascada'},
    {id: 6, url: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg', title: 'Tarjeta seis', text: 'Lago'}
  ]

  return (
    <div className='container'>
      <Cardcomponent count={count} wallpapersArray={wallpapersArray}/>
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

export default App
