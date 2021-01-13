import React,{ Component } from "react";
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Skills from '../src/components/Skills/Skills';
import Experience from '../src/components/Experience/Experience';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            basicInfo: [],
            about:[],
            skills:[],
            experience:[]
        }
    }    
    componentDidMount() {
        try {
            this.fetchBasicInfo();
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    async fetchBasicInfo() {
        try {
            const response = await fetch('portfolioData.json');
            const data = await response.json();
            this.setState({ basicInfo: data.basicInfo,about:data.about,skills:data.skills,experience:data.experience });
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    render(){        
        const {
            basicInfo,
            about,
            skills,
            experience
        } = this.state;
        return(
            <div>
                <Home data={basicInfo}/>
                <About data={about}/>
                <Skills data={skills}/>
                <Experience data={experience}/>
            </div>
        )
    }
}