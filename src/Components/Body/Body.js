import React from 'react'
import './Body.css'
import Image from './asset/picture.png'
import Background from './asset/background.png'
import { Button } from 'react-bootstrap';

const Body = () => {
  return (
    <div className="body" id="body">
      <div className="left-side">
        <p id="welcome-text" style={{ marginLeft: "10rem", color: "#ffb400", fontWeight: "750", fontSize: "20px" }} alt="...">WELCOME! 🙋‍♀️</p>
        <h1 id="content" style={{ color: "white" }}>I am Madiha Mallick</h1>
        <p id="text" style={{ color: "white" }}>I'm enthusiastic about, Web development, App development , Cloud Architecture, and literally everything new. Languages I know are Python, JavaScript, HTML, CSS. Eager to learn and evolve each day.</p>
        <ul className="banner_social_link">
          <li ><button id="icons"><i className="fa fa-facebook"></i></button></li>
          <li ><button id="icons"><i className="fa fa-linkedin"></i></button></li>
          <li ><button id="icons"><i className="fa fa-github"></i></button></li>
          <li ><button id="icons"><i className="fa fa-globe"></i></button></li>
          <li ><button id="icons"><i className="fa fa-instagram"></i></button></li>
        </ul>
      </div>
      <div>
        <Button id="cv-download" style={{ marginLeft: "670px", marginTop: "40px", marginBottom: "30px" }}> DOWNLOAD CV </Button>
      </div>
      <div>
        <img src={Background} style={{ position: "absolute", left: "850px", top: "100px" }} width="460" alt="..." />
        <img src={Image} style={{ position: "absolute", left: "850px", top: "10px" }} width="440" height="660" alt="..." />
      </div>
    </div>
  )
}

export default Body
