import React, { Component } from 'react';
import './App.css';
import GetRivers from './GetRivers';
import RiverCard from './RiverCard';

class App extends Component {
    constructor() {
        super();
        this.state = { json: '' };
    }
    componentDidMount() {
        fetch('http://riverlevel.duckdns.org:2000/api/rivers')
            .then(results => {
                return results.json();
            }).then(data => {
            this.setState({ json: data });
            console.log(this.state.json[0].siteName);
        })
    }

    render() {
        console.log(this.state.json);
        let siteName = "Empty";
        if (this.state.json) {
            siteName = this.state.json[0].siteName;
            console.log("siteName is:", siteName);
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">River Levels</h1>
                </header>
                <p className="App-intro">
                    <GetRivers />
                </p>
                <RiverCard name={siteName}/>
                <br/>
                <br/>
                <h5>Lose uncertainty. Not gear.</h5>
            </div>
        );
    }
}

export default App;



