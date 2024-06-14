import React from 'react'
import "./skills.css";
import bootstrap from "../../assets/skills/bootstrap-4.svg"
import GIT from "../../assets/skills/git-icon.svg"
import Tailwind from "../../assets/skills/tailwindcss-icon.svg"
import reactImg from "../../assets/skills/react.svg"
import GoogleCloud from "../../assets/skills/Google Cloud.png"
import Next from "../../assets/skills/Next Js.png"
import HTML5 from "../../assets/skills/html-5.svg"
import CSS3 from "../../assets/skills/css3.svg"
import ReactJS from "../../assets/skills/react.svg"
import Redux from "../../assets/skills/redux.svg"


export default function Skills() {
  return (
    <div id="skills">
      <p className="text-yellow-400 border-yellow-400 text-6xl text-center decoration-double">SKILLS</p>
      <section className=' skillSection flex flex-row justify-evenly m-10 w-9/10'>
        <div className='bg-yellow-300 w-fit h-full flex flex-col text-black p-4 m-2'>
            <h5>Version Control</h5>
            <span className="spanSkills">
                <img src={GIT} alt="" /><a href="https://www.git-scm.com" target="_blank" rel="noreferrer">GIT</a>
            </span>
        </div>

        <div className='bg-yellow-300 w-fit h-full flex flex-col text-black p-4'>
            <h5>Databases</h5>
            <span className="spanSkills">
                <img src={GoogleCloud} alt="" /><a href="https://cloud.google.com/" target="_blank" rel="noreferrer">Google Cloud</a>
            </span>
        </div>
        
        <div className='bg-yellow-300 w-fit h-full flex flex-col text-black p-4 m-2'>
            <h5>Frameworks</h5>
            <span className="spanSkills">
                <img src={reactImg} alt="" /><a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
            </span>
            <span className="spanSkills">
                <img src={bootstrap} alt="bootstrap icon" /><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a>
            </span>
            <span className="spanSkills">
                <img src={Tailwind} alt="" /><a href="https://tailwindcss.com/" target="_blank" className='my-4' rel='noreferrer'>Tailwind</a>
            </span>
        </div>

        <div className='bg-yellow-300 w-fit h-full flex flex-col text-black p-4'>
            <h5>Scripting Languages</h5>
            <span className="spanSkills">
                <img src={HTML5} alt="" />HTML 5
            </span>
            <span className="spanSkills">
                <img src={CSS3} alt="" />CSS 3
            </span>
            <span className="spanSkills">
                <img src={ReactJS} alt="" /><a href="https://react.dev/" target="_blank" rel="noreferrer">React JS</a>
            </span>
            <span className="spanSkills">
                <img src={Redux} alt="" /><a href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a>
            </span>
            <span className="spanSkills">
                <img src={Next} alt="" /><a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next JS</a>
            </span>
        </div>
      </section>
    </div>
  )
}

