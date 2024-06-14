import React from 'react'
import "./Project.css"
import Childproject from './Childproject'
import Weather from '../../assets/weather.png';
import todo  from '../../assets/todo.png';

export default function Projects() {
  return (
    <div id="projects">
        <p className="text-yellow-400 border-yellow-400 text-6xl text-center decoration-double">Projects</p>
        <div className='projects'>
         <Childproject src={Weather} Name="Weather" Info="This is a weather application. This application can show various aspects related to weather of a city"/>
         <Childproject src={todo} Name="TO DO APP" Info="In this application you can easily add your tasks and complete them one by one. Even you can Edit your task."/>
      </div>
    </div>
  )
}
