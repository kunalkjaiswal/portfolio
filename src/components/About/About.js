import React, { Component } from "react";
import profilePic from './profile-pic.jpg';
import '../About/About.css';

export default class About extends Component {   
    constructor(props){
        super(props)
        this.state={
            social:[]
        }
    } 
    componentDidUpdate(){
        if (this.props.data.social !== undefined && this.props.data.social !== this.state.social){
            this.setState({social:this.props.data.social});
        }
    }
    render() {
        if (this.props.data) {
            var title = this.props.data.title;
            var description = this.props.data.description;
            var hobbies = this.props.data.hobbies;
        }
        return (
            <div className="row about container" id="about">
                <div className="col-sm-5">
                    <div className="profile-img">
                        <img src={profilePic} />
                    </div>
                    <div className="social">
                        {this.state.social.map((acc,index) => {
                            return (
                                <span className="social-acc" key={index}>
                                    <a href={acc.url}><i className={acc.class}></i></a>
                                </span>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="col-sm-7 content">
                    <div className="line-text">
                        <h4>About Me</h4>
                    </div>
                    <h3>{title}</h3>
                    <div className="separator"></div>
                    <p>{description}</p>
                    <p>{hobbies}</p>
                </div>
            </div>
        )
    }
}