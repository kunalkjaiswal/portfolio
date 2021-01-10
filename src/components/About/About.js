import React, { Component } from "react";
import '../About/About.css';

export default class About extends Component{
    constructor(){
        super();

    }
    render(){
        return(
        <div className="row about container" id="about">
           <div className="col-sm-6">
                Profile Pic
           </div>
           <div className="col-sm-6">
                About me
           </div>
        </div>
        )
    }
}