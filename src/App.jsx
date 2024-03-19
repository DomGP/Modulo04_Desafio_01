import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MyCard from './components/MyCard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


//ICONS


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar
        navBarTitle = 'Patas Felices'
        navBarHome = 'Inicio'
        navBarLink = 'Adopta'
      />
      <Header
        title = 'Adopta un Perrito'
      />
      <div className='flex'>
        <MyCard 
          cardImg = 'https://placedog.net/200/312'
          cardTitle = 'Bucky'
          cardText = '¡Conoce a Bucky! Este pequeño amigo está lleno de energía y ansioso por jugar. ¡Dale a Bucky el hogar que se merece hoy mismo! '
          badgeColor='primary' 
          badgeText='Golden Retriver' 
          /> 
        <MyCard 
          cardImg = 'https://placedog.net/200/323'
          cardTitle = 'Luna'
          cardText = '¡Conoce a Luna! Esta adorable bolita de pelo busca un hogar donde recibir amor. ¡Adóptala hoy y haz realidad su sueño!'
          badgeColor='secondary' 
          badgeText='Husky'
        />
        <MyCard 
          cardImg = 'https://placedog.net/200/326'
          cardTitle = 'Max'
          cardText = '¡Conoce a Max! Este travieso perrito está lleno de vida y busca un compañero para sus travesuras. ¡Hazlo feliz hoy! '
          badgeColor='success' 
          badgeText='Cavalier King Charles Spaniel'
        />
        <MyCard 
          cardImg = 'https://placedog.net/200/329'
          cardTitle = 'Milo'
          cardText = '¡Conoce a Milo! Este tierno perrito espera con ansias encontrar un hogar lleno de amor. ¡Hazlo parte de tu familia hoy mismo!'
          badgeColor='danger' 
          badgeText='Labrador'
        />
        <MyCard 
          cardImg = 'https://placedog.net/200/331'
          cardTitle = 'Charlie'
          cardText = '¡Conoce a Charlie! Este intrépido perrito está listo para emocionantes exploraciones. ¡Dale un hogar lleno de aventuras!'
          badgeColor='warning' 
          badgeText='Dalmata'
        />
        <MyCard 
          cardImg = 'https://placedog.net/200/351'
          cardTitle = 'Duke'
          cardText = '¡Conoce a Duke! Este dulce perrito tiene mucho amor para dar. ¡Adóptalo y recibe cariño sin límites!'
          badgeColor='info' 
          badgeText='Pastor Australiano'
        />
        <MyCard 
          cardImg = 'https://placedog.net/200/358'
          cardTitle = 'Liam'
          cardText = '¡Conoce a Liam! Este divertido perrito busca un compañero de juegos. ¡Hazlo feliz con tu compañía hoy! '
          badgeColor='dark' 
          badgeText='Mestizo'
        />
        
        <MyCard 
          cardImg = 'https://placedog.net/200/359'
          cardTitle = 'Bailey'
          cardText = '¡Conoce a Bailey! Este tranquilo perrito busca un lugar cómodo para dormir. ¡Hazlo parte de tu hogar hoy! '
          badgeColor='primary' 
          badgeText='Pitbull'
        />
        
      </div>
      <Footer 
        footerText = 'Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero para siempre.'
        buttonColor = 'outline-info'
        buttonText = 'Adopta un perrito aquí'
        /* footerIcon = '../public/assets/imgs/bone-solid.svg' */
        footerTextII = '© 2024 Patas Felices. Todos los derechos reservados.'
      />
    </>
  )
}

export default App
