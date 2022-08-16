import React from 'react'
import academy from "../assets/imgs/academy.png";
import  "../styles/header.css";


export default function Header() {
  return (
    <div> 
    <nav>
    <img className="logo-nav" src={academy} alt="logo" />
    <div>
    </div>
    <ul className="nav">
     <li>Métiers</li>
     <li>Technologiques</li>
     <li>Entreprise</li>
     <li>Notre Academy</li>
     <li>Villes</li>
    </ul>
    <button className="btnnav1">CVthéque</button>
    <button className="btnnav2">contact</button>
    {/* <body>
      <main>
        <section className='academy'>
          <p>Devenir développeur web et réaliser ses projets professionels</p>
          <p>Des formations diplômantes faites par des experts plus que passionnés
pour vous mener au succès professionnel.</p>
<br/>
<ul className='card'>
  <li>
    <div className='incard'>
      <img src="https://3wa.fr/wp-content/uploads/2020/03/card2.svg" alt="img1" />
    <span>1er bootcamp en France</span>
    </div>
    </li>

</ul>

        </section>
      </main>
    </body> */}

    </nav> 
    </div>
  )
}
