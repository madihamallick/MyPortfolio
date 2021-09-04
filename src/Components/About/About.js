import React from 'react'
import './About.css'
import Image from './asset/img.png'

const About = () => {
    return (
        <div id="about" className="aboutComp">
            <h2 id="heading"><span style={{color:"white"}}>ABOUT </span><span style={{color:"#ffb400"}}>ME</span></h2>
            <div id="border" style={{color:"#ffb400"}}></div>
            <div className="about-left-side">
                <img id="about-picture" src={Image} width="390" height="490" alt="..." />
            </div>
            <div className="about-right-side">
                <h2 style={{ color: "white"}}>Hello, 🖐 I am Madiha Mallick</h2>
                <p style={{ color: "white", marginTop:"2rem" }}>Computer Science undergraduate persuing Btech in Computer Science and Engineering. Initially, I was nowhere sure if this would be the right choice for me. But then I found passion for coming up with solutions to different problems faced by us as a society, studying algorithms, and implementing them. The one thing that never stops fascinating me is that computer science makes it possible to implement the imagination of a mere individual that can impact the whole world. Connect with me if you are passionate too.🤜🤛 </p>
                <ul>
                    <li>
                        <p style={{color:"white"}}><strong style={{marginRight:"8rem"}}>Name</strong>:  Madiha Mallick</p>
                        <p style={{color:"white"}}><strong style={{marginRight:"9rem"}}>Age</strong>:   19</p>
                        <p style={{color:"white"}}><strong style={{marginRight:"7rem"}}>Address</strong>:   Kolkata, India</p>
                        <p style={{color:"white"}}><strong style={{marginRight:"6rem"}}>Phone no</strong>:  +91 7044579043</p>
                        <p style={{color:"white"}}><strong style={{marginRight:"8rem"}}>Email</strong>:   mallickmadiha9031@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
