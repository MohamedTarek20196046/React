import React from 'react'
import { Link } from 'react-router-dom'
import pizza from "../assets/pizza.jpeg"
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${pizza})` }}>
     <div className='headerContainer' > 
     <h1>Ter2a's Pizza</h1>
     <p>PIZZA ROULLETTE</p>
     <Link to="/menu"><button>ORDER NOW</button></Link>
     
     </div>
    </div>
  )
}

export default Home