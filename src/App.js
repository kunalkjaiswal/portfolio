import React,{ Component } from "react"
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            basicInfo: []
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
            this.setState({ basicInfo: data.basicInfo });
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    render(){        
        const {
            basicInfo
        } = this.state;
        return(
            <div>
                <Home data={basicInfo}/>
                <About/>
            </div>
        )
    }
}