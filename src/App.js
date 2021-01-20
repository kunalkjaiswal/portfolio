import React,{ Component } from "react";
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Skills from '../src/components/Skills/Skills';
import Experience from '../src/components/Experience/Experience';
import Contact from '../src/components/Contact/Contact';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            basicInfo: [],
            about:[],
            skills:[],
            experience:[],
            contact:[]
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
            this.setState({ 
                basicInfo: data.basicInfo,
                about:data.about,
                skills:data.skills,
                experience:data.experience,
                contact:data.contact
            });
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
            experience,
            contact
        } = this.state;
        return(
            <div>
                <Home data={basicInfo}/>
                <About data={about}/>
                <Skills data={skills}/>
                <Experience data={experience}/>
                <Contact data={contact}/>
            </div>
        )
    }
}