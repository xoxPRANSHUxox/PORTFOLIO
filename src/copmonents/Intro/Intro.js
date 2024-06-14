import React from 'react';
import './Intro.css';
import bg from '../../assets/background.jpeg';
import { Link } from 'react-scroll';
export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
         <span className="hello">Hello</span>
         <span className="introText">I'm <span className="introName">Pranshu</span><br /> Web Designer</span>
         <p className='introPara'>I am a skilled Web Designer with experience in creating website.</p>
         <Link><button className='text-black bg-gradient-to-br from-yellow-400 to-red-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>HIRE ME</button></Link>
        </div>
        <img src={bg} alt="Portfolio" className='bg'/>
      </section>
    </div>
  )
}
