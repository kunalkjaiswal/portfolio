import React, { Component } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import './Skills.css';


export default class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            icons: []
        }
    }
    componentDidUpdate() {
        if (this.props.data.icons !== undefined && this.props.data.icons !== this.state.icons) {
            this.setState({ icons: this.props.data.icons });
        }
    }
    render() {
        return (
            <div className="row skills container" id="skills">
                <div className="line-text">
                    <h4>Skills</h4>
                </div>
                <div className="row skill-tech">
                    {this.state.icons.map((icon, index) => {
                        return (
                            <div className="col-sm-4 tech" key={index}>
                                    <span className="tech-icon">
                                        <i className={icon.class}></i>
                                    </span>
                                    <ProgressBar bgcolor={icon.color} completed={icon.level} />
                            </div>
                        )
                    })
                    }
                </div>
            </div >
        );
    }
}