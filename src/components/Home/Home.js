import React, { Component } from "react";
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Home/Home.css';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            pcMode: (window.innerWidth >= 760),
            particleValue: (window.innerWidth >= 760) ? 100 : 40,
            particleDensity: (window.innerWidth >= 760) ? 120 : 50
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        let currentPcMode = (window.innerWidth >= 760);
        if (currentPcMode !== this.state.pcMode) {
            this.setState({
                particleValue: (window.innerWidth >= 760) ? 100 : 40,
                particleDensity: (window.innerWidth >= 760) ? 120 : 50
            });
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }
    render() {
        const { particleDensity, particleValue } = this.state;
        if (this.props.data) {
            var name = this.props.data.name;
            var jobTitle = this.props.data.jobTitle;
        }
        return (
            <header className="home container" id="home">
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Particles
                    canvasClassName="particles"
                    params={{
                        particles: {
                            number: {
                                value: particleValue,
                                density: particleDensity
                            },

                            size: {
                                value: 3
                            },
                            color: {
                                value: "#eb83f8"
                            },
                            line_linked: {
                                enable: true,
                                color: {
                                    value: "#eb83f8"
                                }
                            },
                            type: "polygon",
                            polygon: {
                                nb_sides: 6
                            }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            },
                            modes: {
                                repulse: {
                                    distance: 150
                                }
                            }
                        }
                    }}
                />
                <div className="row home container">
                    <div className="content-text">
                        <div className="line-text">
                            <h4>Hello, I'm</h4>
                        </div>
                        <div className="glitch" data-text={name}>{name}</div>
                        <Typewriter
                            options={{
                                strings: jobTitle,
                                autoStart: true,
                                loop: false,
                            }}
                        />
                        <div className="columns download">
                            <p>
                                <a href="/Resume.pdf" target="_blank" className="button"><i name="resume" className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}