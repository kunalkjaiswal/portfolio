import React, { Component } from "react";
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';
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
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav opaque">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#skills">Skills</a></li>
                        <li><a className="smoothscroll" href="#experience">Experience</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>
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
                                    type:"polygon",
                                    polygon:{
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
                                    modes:{
                                        repulse:{
                                            distance:150
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
                                <a href="/Resume.pdf" className="button"><i name="resume" className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}