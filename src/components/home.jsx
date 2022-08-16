import React from "react"
import academy from "../assets/imgs/academy.png";
import "../styles/home.css"
import "./card.jsx"
import Card from "./card.jsx"
// import { BsFacebook } from 'react-icons/fa';
import {FaFacebookF } from 'react-icons/fa';
import {FaLinkedin } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


export default function home() {
    return (
      <div> 
      <body>
        <main>
          <section className='academy'>
            <div className="ok">
            <p style={{color:"red"}}>Devenir développeur web et réaliser ses projets professionels</p>
            <p style={{fontSize:"1.5em"}}>Des formations diplômantes faites par des experts plus que passionnés
  pour vous mener au succès professionnel.</p>
  </div>
  <br/>
  <ul className='card'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    
      {/* <li>
      <div className='incard'>
        <img src="https://3wa.fr/wp-content/uploads/2020/03/card8-hover.svg" alt="img1" />
      <span>Enseignées pae des professionnels</span>
      <p>qui partagent plus qu'une passion !</p>
      </div>
      </li>
      <li>
      <div className='incard'>
        <img src="https://3wa.fr/wp-content/uploads/2020/03/card4-hover.svg" alt="img1" />
      <span>Certitifées et reconnues</span>
      <p>par l'état, le secteur et les entreprises</p>
      </div>
      </li>
      <li>
      <div className='incard'>
        <img src="https://3wa.fr/wp-content/uploads/2020/03/card6-hover.svg" alt="img1" />
      <span>Tester nos cours gartuitement</span>
      <p>depuis chez vous et dés maintenant!</p>
      </div>
      </li>
      <li>
      <div className='incard'>
        <img src="https://3wa.fr/wp-content/uploads/2020/03/card5-hover.svg" alt="img1" />
      <span>Osez la reconversion professionnelle</span>
      <p>car l'ambition est le seul pré-requis</p>
      </div>
      </li>
      <li>
      <div className='incard'>
        <img src="https://3wa.fr/wp-content/uploads/2020/03/card9-hover.svg" alt="img1" />
      <span>spécialisez vous davantage</span>
      <p>avec des programmes pour tous niveaux</p>
      </div>
      </li> */}
  
  </ul>
  
          </section>
        </main>
      </body>
  <footer>
  <img className="logo-nav" src={academy} alt="logo" />
  <p>Le code d'aujourdhui , votre emploi</p>
  <p>formation professionels pour devnir développer web et mobile </p>
  <p>suiver nous</p>
  <div className="icone">
     <FaFacebookF/> <FaLinkedin/><FaTwitter/><FaInstagram/>< FaYoutube/>
     </div>
  </footer>
      
      </div>
    )
  }