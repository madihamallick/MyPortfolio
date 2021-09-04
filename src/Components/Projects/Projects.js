import { React } from 'react'
import { CardGroup, Card, Button } from 'react-bootstrap';
import './Projects.css'
import Img1 from './asset/project1.png'
import Img2 from './asset/project2.png'
import Img3 from './asset/project3.png'
import Img4 from './asset/project4.png'

const Projects = () => {
    return (
        <div className="projectBody" id="projects">
            <h2 id="heading"><span style={{ color: "white" }}>MY </span><span style={{ color: "#ffb400" }}>WORK</span></h2>
            <p style={{ color: "white", textAlign: "center" }}>Here are some of my works. Do check it out, <br /> I would love to hear suggestions from you guys. More projects on the way!</p>
            <div id="border" style={{ color: "#ffb400" }}></div>
            <CardGroup style={{ marginTop: "80px" }}>
                <Card id="card" style={{ boxShadow: "white" }}>
                    <Card.Img variant="top" src={Img1} width="281" height="260" />
                    <Card.Body>
                        <Card.Title>CALCULATOR</Card.Title>
                        <Card.Text>
                            A simple Flutter Applicattion that performs some basic calculations.💻
                        </Card.Text>
                        <Button id="view-project" href="https://github.com/madihamallick/Calculator">View Project</Button>
                    </Card.Body>
                </Card>
                <Card id="card" bg="black" style={{ boxShadow: "white" }}>
                    <Card.Img variant="top" src={Img2} width="281" height="260" />
                    <Card.Body>
                        <Card.Title>DREAM INTERIORS</Card.Title>
                        <Card.Text>
                            Your search for best Interior design ends here ✨
                        </Card.Text>
                        <Button id="view-project" href="https://madihamallick.github.io/Dream-Interiors/">View Project</Button>
                    </Card.Body>
                </Card>
                <Card id="card" bg="black" style={{ boxShadow: "white" }}>
                    <Card.Img variant="top" src={Img3} width="281" height="260" />
                    <Card.Body>
                        <Card.Title>HANGAME GAME</Card.Title>
                        <Card.Text>
                            Your very favorite Hangman game. Guess the correct word and let the man live! 🎉
                        </Card.Text>
                        <Button id="view-project" href="https://github.com/madihamallick/Py-games">View Project</Button>
                    </Card.Body>
                </Card>
                <Card id="card" bg="black" style={{ boxShadow: "white" }}>
                    <Card.Img variant="top" src={Img4} width="281" height="260" />
                    <Card.Body>
                        <Card.Title>MEMORY GAME</Card.Title>
                        <Card.Text>
                            Memory game made using javascript, HTML and CSS having amazing gif to match and win! 😉
                        </Card.Text>
                        <Button id="view-project" href="https://madihamallick.github.io/Memory-Game/">View Project</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <div>
                <Button id="view-project" style={{marginLeft:"670px", marginTop:"40px", marginBottom:"100px"}} href="https://github.com/madihamallick?tab=repositoriesF"> VIEW ALL PROJECTS </Button>
            </div>
        </div>
    )
}

export default Projects
