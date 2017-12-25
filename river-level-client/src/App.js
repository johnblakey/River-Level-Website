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
        const api = 'http://riverlevel.duckdns.org:2000/api/rivers';
        fetch(api)
            .then(response => response.json())
            .then(data => this.setState({ json: data }));
    }

    render() {
        console.log(this.state.json);
        let site = "Empty";
        let time = "Empty";
        let level = "Empty";
        let props = {};
        let i = 0;
        if (this.state.json) {
            site = this.state.json[i].siteName;
            time = this.state.json[i].dateTime;
            level = this.state.json[i].levelValue;
            props = {
                name: site,
                time: time,
                level: level
            }
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">River Levels</h1>
                </header>
                <p className="App-intro">
                    <GetRivers />
                </p>
                <RiverCard {...props}/>
                <br/>
                <br/>
                <h5>Lose uncertainty. Not gear.</h5>
            </div>
        );
    }
}

export default App;



